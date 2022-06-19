from importlib.resources import path
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.utils import timezone


class Lecturer(models.Model):
    name = models.CharField(max_length=80)
    surname = models.CharField(max_length=80)
    phone = models.CharField(max_length=10, default='000000000')
    room = models.CharField(max_length=20, default='noroom')
    email = models.EmailField(max_length=80, default='noemail@noemail.com')

    class Meta:
        ordering = ['surname']

    def __str__(self):
        return self.name + ";" + self.surname + ";" + self.phone + ";" + self.room + ":" + self.email

class Course(models.Model):
    course_name = models.CharField(max_length=80)
    description = models.TextField()
    obligatory = models.BooleanField()
    semester = models.IntegerField(validators=[MaxValueValidator(7), MinValueValidator(1)], null=True, blank=True)

    lecturers = models.ManyToManyField(Lecturer) 

    class Meta:
        ordering = ['semester']

    def __str__(self):
        names = ''
        for lecturer in self.lecturers.all():
            names += str(lecturer) + ', '
        names = names[:-2]
        if self.obligatory:
            return 'Course ' + self.course_name + ' is taught by ' + names +\
            ' at '+ str(self.semester) + ' and is obligatory: ' + self.description
        else:
            return 'Course ' + self.course_name + ' is taught by ' + names +\
            ' and is non obligatory: ' + self.description


class Review(models.Model):
    author_name = models.CharField(max_length=80)
    author_surname = models.CharField(max_length=80)
    author_email = models.EmailField()
    score = models.IntegerField(validators=[MaxValueValidator(10), MinValueValidator(1)])
    description = models.TextField()
    upload_date = models.DateTimeField(default=timezone.now)

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
    path_to_file = models.CharField(max_length=160)
    description = models.TextField()
    upload_date = models.DateField()

    course = models.ForeignKey(Course, on_delete=models.CASCADE, blank=False, null=False)

    def __str__(self):
        return str(self.upload_date) + ': ' + self.description + '(' + self.path_to_file + ')'

    def get_path_to_file(self):
        return self.path_to_file    
