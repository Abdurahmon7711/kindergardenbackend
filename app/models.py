from django.db import models
from django.core.validators import FileExtensionValidator
# Create your models here.


class Source(models.Model):
    name = models.CharField(max_length=100)

    def users(self) -> int:
        return sum(
            [User_3_5.objects.filter(using_source=self).count(),
            User_6_7.objects.filter(using_source=self).count(),
            User_8_12.objects.filter(using_source=self).count()]
        )

class Book(models.Model):
    title = models.CharField(max_length=100)

    def users(self) -> int:
        return sum(
            [User_3_5.objects.filter(book=self).count(),
            User_6_7.objects.filter(book=self).count(),
            User_8_12.objects.filter(book=self).count()]
        )


class User_3_5(models.Model):
    name = models.CharField(max_length=50)
    age= models.IntegerField()
    interests = models.CharField(max_length=100)
    using_source = models.ForeignKey(Source, on_delete=models.SET_NULL, null=True)
    book = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    binds_with = models.TextField()
    favourite_heros = models.TextField()
    needed_buy_books = models.TextField()

    @classmethod
    def stats(self):
        return {
            'books': [
                {
                    'name': book.title,
                    'count': self.objects.filter(book=book).count(),
                } for book in Book.objects.all()
            ],
            'sources': [
                {
                    'name': source.name,
                    'count': self.objects.filter(using_source=source).count(),
                } for source in Source.objects.all()
            ]
        }


class User_6_7(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    age= models.IntegerField()
    free_time_work = models.TextField()
    using_source = models.ForeignKey(Source, on_delete=models.SET_NULL, null=True)
    book = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    favourite_asar = models.TextField()
    favourite_asar2222 = models.TextField()
    @classmethod
    def stats(self):
        return {
            'books': [
                {
                    'name': book.title,
                    'count': self.objects.filter(book=book).count(),
                } for book in Book.objects.all()
            ],
            'sources': [
                {
                    'name': source.name,
                    'count': self.objects.filter(using_source=source).count(),
                } for source in Source.objects.all()
            ]
        }


class User_8_12(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    age= models.IntegerField()
    favourite_work = models.TextField()
    using_source = models.ForeignKey(Source, on_delete=models.SET_NULL, null=True)
    book = models.ForeignKey(Book, on_delete=models.SET_NULL, null=True)
    favourite_asar = models.TextField()
    favourite_asar_personaj_like = models.TextField()
    @classmethod
    def stats(self):
        return {
            'books': [
                {
                    'name': book.title,
                    'count': self.objects.filter(book=book).count(),
                } for book in Book.objects.all()
            ],
            'sources': [
                {
                    'name': source.name,
                    'count': self.objects.filter(using_source=source).count(),
                } for source in Source.objects.all()
            ]
        }



class AudioBook(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    img = models.ImageField()
    audio = models.FileField(
        validators=[
            FileExtensionValidator(
                allowed_extensions=['mp3', 'wav'],
                message='Неверный формат файла'
            )
        ]
    )

