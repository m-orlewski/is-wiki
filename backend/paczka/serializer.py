
from rest_framework.serializers import ModelSerializer
from .models import *

class LecturerSerializer(ModelSerializer):
    class Meta:
        model = Lecturer
        fields = ['id', 'name', 'surname', 'phone', 'room', 'email']

class CourseSerializer(ModelSerializer):

    class Meta:
        model = Course
        fields = ('id', 'course_name', 'description', 'obligatory', 'semester', 'lecturers')

class ReviewSerializer(ModelSerializer):

    class Meta:
        model = Review
        fields = ('id', 'author_name', 'author_surname', 'author_email', 'score', 'description', 'lecturer', 'course', 'upload_date')

class MaterialSerializer(ModelSerializer):

    class Meta:
        model = Material
        fields = ('id', 'path_to_file', 'description','upload_date', 'course')
