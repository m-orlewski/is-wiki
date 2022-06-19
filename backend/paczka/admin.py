from django.contrib import admin
from .models import Lecturer, Review, Material, Course

# Register your models here.

admin.site.register(Lecturer)
admin.site.register(Review)
admin.site.register(Material)
admin.site.register(Course)