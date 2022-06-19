from django.urls import path
from . import views

urlpatterns = [
    path('lecturers', views.lecturers),
    path('lecturer', views.lecturer),
    path('courses', views.courses),
    path('course', views.course),
    path('reviews', views.reviews),
    path('review', views.review),
    path('add_review', views.add_review),
    path('materials', views.materials),
    path('material', views.material),
]