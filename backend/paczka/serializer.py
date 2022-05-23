
from rest_framework.serializers import ModelSerializer
from .models import *

class LecturerSerializer(ModelSerializer):

    class Meta:
        model = Lecturer
        fields = ('name', 'surname')

class CourseSerializer(ModelSerializer):

    class Meta:
        model = Course
        fields = ('course_name', 'description', 'obligatory', 'semester', 'lecturer')

class ReviewSerializer(ModelSerializer):

    class Meta:
        model = Review
        fields = ('author_name', 'author_surname', 'author_email', 'score', 'description', 'lecturer', 'course')


class MaterialSerializer(ModelSerializer):

    class Meta:
        model = Material
        fields = ('author_name', 'author_surname', 'author_email', 'path_to_file', 'descripton','upload_date', 'course')
