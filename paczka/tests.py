from django.test import TestCase
import datetime
from paczka.models import *

class LecturerModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Lecturer.objects.create(name='Bill',
        surname='Turner')

    def test_name_label(self):
        leader = Lecturer.objects.get(id=1)
        field_label = leader._meta.get_field('name').verbose_name
        self.assertEqual(field_label,'name')

    def test_surname_label(self):
        leader = Lecturer.objects.get(id=1)
        field_label = leader._meta.get_field('surname').verbose_name
        self.assertEqual(field_label,'surname')
 
    def test_name_max_length(self):
        leader = Lecturer.objects.get(id=1)
        max_length = leader._meta.get_field('name').max_length
        self.assertEqual(max_length,80)

    def test_surname_max_length(self):
        leader = Lecturer.objects.get(id=1)
        max_length = leader._meta.get_field('surname').max_length
        self.assertEqual(max_length,80)

    def test_string_representation_of_object(self):
        leader = Lecturer.objects.get(id=1)
        expected_str = 'Bill Turner'
        self.assertEqual(str(leader),expected_str)

class CourseModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        l = Lecturer.objects.create(name='Bill',
        surname='Turner')

        Course.objects.create(course_name='swordsmanship',
        description='you will be able to be a pirate',
        obligatory = True,
        semester=5)

        leader = Course.objects.get(id=1)
        leader.lecturers.add(l)

    def test_course_name_label(self):
        leader = Course.objects.get(id=1)
        field_label = leader._meta.get_field('course_name').verbose_name
        self.assertEqual(field_label,'course name')

    def test_description_label(self):
        leader = Course.objects.get(id=1)
        field_label = leader._meta.get_field('description').verbose_name
        self.assertEqual(field_label,'description')

    def test_obligatory_label(self):
        leader = Course.objects.get(id=1)
        field_label = leader._meta.get_field('obligatory').verbose_name
        self.assertEqual(field_label,'obligatory')

    def test_semester_label(self):
        leader = Course.objects.get(id=1)
        field_label = leader._meta.get_field('semester').verbose_name
        self.assertEqual(field_label,'semester')

    def test_lecturer_label(self):
        leader = Course.objects.get(id=1)
        field_label = leader._meta.get_field('lecturers').verbose_name
        self.assertEqual(field_label,'lecturers')

    def test_course_name_max_length(self):
        leader = Course.objects.get(id=1)
        max_length = leader._meta.get_field('course_name').max_length
        self.assertEqual(max_length,80)

    def test_string_representation_of_object(self):
        leader = Course.objects.get(id=1)
        expected_str = f'Course swordsmanship is taught by Bill Turner at \
{leader.semester} and is obligatory: you will be able to be a pirate'
        self.assertEqual(str(leader),expected_str)
        leader.obligatory = False 
        expected_str = f'Course swordsmanship is taught by Bill Turner \
and is non obligatory: you will be able to be a pirate'
        self.assertEqual(str(leader),expected_str)
    
class ReviewModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Lecturer.objects.create(name='Bill',
        surname='Turner')

        c = Course.objects.create(course_name='swordsmanship',
        description='you will be able to be a pirate',
        obligatory = True,
        semester=5)

        c.lecturers.add(Lecturer.objects.get(id=1))
    
        Review.objects.create(author_name='Rob',
        author_surname='Marshall',
        author_email='rob.marshall@pirate.bay',
        score='8',
        description='good director',
        course=c)

    def test_string_representation_of_object(self):
        leader = Review.objects.get(id=1)
        
        expected_str = f'Review by {leader.author_name} {leader.author_surname}({leader.author_email}) about Course \
swordsmanship is taught by Bill Turner at 5 and is obligatory: you will be able to be a pirate with score {leader.score}: {leader.description}'

        self.assertEqual(str(leader),expected_str)
        leader.lecturer=Lecturer.objects.get(id=1)
        expected_str=f'Review by {leader.author_name} {leader.author_surname}({leader.author_email})\
 about Bill Turner with score {leader.score}: {leader.description}'
        self.assertEqual(str(leader),expected_str)

class MaterialModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        l = Lecturer.objects.create(name='Bill',
        surname='Turner')

        c = Course.objects.create(course_name='swordsmanship',
        description='you will be able to be a pirate',
        obligatory = True,
        semester=5)
        c.lecturers.add(l)
    
        Material.objects.create(
        path_to_file='/tmp',
        description='good director',
        upload_date='2022-10-23',
        course=c)

    def test_string_representation_of_object(self):
        leader = Material.objects.get(id=1)
        expected_str = f'{leader.upload_date}: {leader.description}({leader.path_to_file})'
        self.assertEqual(str(leader),expected_str)

    def test_get_path_method(self):
        leader = Material.objects.get(id=1)

        self.assertEqual(leader.get_path_to_file(),'/tmp')


