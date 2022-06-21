from django.contrib import admin

# Register your models here.
from .models import  AudioBook, Book, Source, User_3_5, User_6_7, User_8_12


admin.site.register(User_3_5)
admin.site.register(User_6_7)
admin.site.register(User_8_12)
admin.site.register(Book)
admin.site.register(Source)
admin.site.register(AudioBook)