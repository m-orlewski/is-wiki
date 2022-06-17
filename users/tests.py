from django.test import TestCase
from .models import User

# Create your tests here.

class UserModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        User.objects.create_user(email="a@email.com", first_name="a", last_name="b", password="iswiki123")

    def test_string_representation_of_object(self):
        leader = User.objects.get(id=1)
        expected_str = f'{leader.email}'
        self.assertEqual(str(leader),expected_str)