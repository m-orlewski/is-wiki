from django.urls import path
from . import views

urlpatterns = [
    path('lecturers', views.ListLecturer.as_view()),
    path('lecturer/<int:pk>/', views.DetailLecturer.as_view()),
    path('courses', views.ListCourse.as_view()),
    path('course/<int:pk>/', views.DetailCourse.as_view()),
    path('reviews', views.ListReview.as_view()),
    path('review/<int:pk>/', views.DetailReview.as_view()),
    path('materials', views.ListMaterial.as_view()),
    path('material/<int:pk>/', views.DetailMaterial.as_view()),
]