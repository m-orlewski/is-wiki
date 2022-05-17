from distutils.command.upload import upload
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Lecturer(models.Model):
    name = models.CharField(max_length=80)
    surname = models.CharField(max_length=80)


    def __str__(self):
        return self.name + " " + self.surname

class Course(models.Model):
    course_name = models.CharField(max_length=80)
    description = models.TextField()
    obligatory = models.BooleanField()
    semester = models.IntegerField(validators=[MaxValueValidator(7), MinValueValidator(1)])

    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE, blank=False, null=False)


    def __str__(self):
        if self.obligatory:
            obligatory_text = 'obligatory'
        else:
            obligatory_text = 'non obligatory'

        return 'Course ' + self.course_name + ' is taught by ' + self.lecturer.__str__() +\
            ' at '+ self.semester + ' and is ' + obligatory_text + ": " + self.description


class Review(models.Model):
    author_name = models.CharField(max_length=80)
    author_surname = models.CharField(max_length=80)
    author_email = models.EmailField()
    score = models.IntegerField(validators=[MaxValueValidator(10), MinValueValidator(1)])
    description = models.TextField()

    lecturer = models.ForeignKey(Lecturer, on_delete=models.CASCADE, blank=True, null=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=True, null=True)


    def __str__(self):
        if self.lecturer:
            about = self.lecturer
        else:
            about = self.course
        return 'Review by ' + self.author_name + ' ' + self.author_surname + '(' + self.author_email + ')' +\
               ' about ' + about.__str__() + ' with score ' + str(self.score) + ': ' + self.description


class Material(models.Model):
    author_name = models.CharField(max_length=80)
    author_surname = models.CharField(max_length=80)
    author_email = models.EmailField()
    path_to_file = models.CharField(max_length=160)
    descripton = models.TextField()
    upload_date = models.DateField()

    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=False, null=False)

    def __str__(self):
        return 'Uploaded by ' + self.author_name + ' ' + self.author_surname + '(' + self.author_email + ')' +\
            ' at ' + self.upload_date + ': ' + self.descripton

    def get_path_to_file(self):
        return self.path_to_file         