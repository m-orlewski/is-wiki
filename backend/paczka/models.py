from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Lecturer(models.Model):
    name = models.CharField(max_length=80)
    surname = models.CharField(max_length=80)

    def __str__(self):
        return self.name + " " + self.surname

class Review(models.Model):
    author_name = models.CharField(max_length=80)
    author_surname = models.CharField(max_length=80)
    author_email = models.EmailField()
    score = models.IntegerField(validators=[MaxValueValidator(10), MinValueValidator(1)])
    description = models.TextField()

    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE, blank=True, null=True)
    #course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True, null=True)


    def __str__(self):
        if self.lecturer:
            about = self.lecturer
        else:
            about = self.course
        return 'Review by ' + self.author_name + ' ' + self.author_surname + '(' + self.author_email + ')' +\
               ' about ' + about.__str__() + ' with score ' + str(self.score) + ': ' + self.description

