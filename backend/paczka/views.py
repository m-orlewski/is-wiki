from django.shortcuts import render
from rest_framework import generics, status
from .models import *
from .serializer import *
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def lecturers(request):
    lecturers = Lecturer.objects.all()
    serializer = LecturerSerializer(lecturers, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def lecturer(request):
    try:
        lecturer = Lecturer.objects.get(pk=request.data['pk'])
        serializer = LecturerSerializer(lecturer)
        return Response(serializer.data)
    except Lecturer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def courses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def course(request):
    try:
        course = Course.objects.get(pk=request.data['pk'])
        serializer = CourseSerializer(course)
        return Response(serializer.data)
    except Lecturer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def materials(request):
    materials = Material.objects.all()
    serializer = MaterialSerializer(materials, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def material(request):
    try:
        material = Material.objects.get(pk=request.data['pk'])
        serializer = MaterialSerializer(material)
        return Response(serializer.data)
    except Lecturer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def reviews(request):
    reviews = Review.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def review(request):
    try:
        review = Review.objects.get(pk=request.data['pk'])
        serializer = ReviewSerializer(review)
        return Response(serializer.data)
    except Lecturer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def add_review(request):
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)