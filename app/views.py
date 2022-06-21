from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from .models import AudioBook, Book, Source,  User_3_5, User_6_7, User_8_12
# Create your views here.


def home(request):
    return render(request, 'index.html', context={
        'home_page_header': 'active'
    })


def about(request):
    return render(request, 'about.html', context={
        'about_page_header': 'active'
    })


def classes(request):
    return render(request, 'classes.html', context={
        'classes_page_header': 'active',
        'srcs': Source.objects.all(),
        'books': Book.objects.all()
        })

def sites(request):
    return render(request, 'sites.html', context={
        'sites_page_header': 'active'
        })
    
def contact(request):
    return render(request, 'contact.html', context={
        'contact_page_header': 'active'
        })


def ebooks(request):
    return render(request, 'ebooks.html', context={
        'other_pages_header': 'active'
        })

def audiobooks(request):
    return render(request, 'audiobooks.html', context={
        'other_pages_header': 'active',
        'audiobooks': AudioBook.objects.all()
        })


def clips(request):
    return render(request, 'videoPages/videos.html', context={
        'other_pages_header': 'active'
        })



def skill_lessons(request):
    return render(request, 'skillPages/skill-lessons.html', {
        'other_pages_header': 'active'
    })

def interesting_photos(request):
    return render(request, 'interesting-photos.html', {
        'other_pages_header': 'active'
    })

def games(request):
    return render(request, 'games.html', {
        'other_pages_header': 'active'
    })



def register_ages(request, start, end):
    data = request.POST
    print(data)
    if start == 3 and end == 5:
        user = User_3_5.objects.create(
            name=data.get('name'),
            age=data.get('age'),
            interests=data.get('interests'),
            using_source=Source.objects.filter(id=data.get('using_source')).first(),
            book=Book.objects.filter(pk=data.get('book')).first(),
            binds_with=data.get('binds_with'),
            favourite_heros=data.get('favourite_heros'),
            needed_buy_books=data.get('needed_buy_books')
        )
    elif start == 6 and end == 7:
        user = User_6_7.objects.create(
            name=data.get('name'),
            surname = data.get('surname'),
            age=data.get('age'),
            free_time_work=data.get('free_time_work'),
            using_source=Source.objects.filter(id=data.get('using_source')).first(),
            book=Book.objects.filter(pk=data.get('book')).first(),
            favourite_asar=data.get('favourite_asar'),
            favourite_asar2222=data.get('favourite_asar2222'),
        )
    elif start == 8 and end == 12:
        user = User_8_12.objects.create(
            name=data.get('name'),
            surname = data.get('surname'),
            age=data.get('age'),
            favourite_work=data.get('favourite_work'),
            using_source=Source.objects.filter(id=data.get('using_source')).first(),
            book=Book.objects.filter(pk=data.get('book')).first(),
            favourite_asar=data.get('favourite_asar'),
            favourite_asar_personaj_like=data.get('favourite_asar_personaj_like'),
        )

    return redirect('classes',)


def get_statistic(request):
    # sources: "list[Source]" = Source.objects.all()
    # books: "list[Book]" = Book.objects.all()
    # return JsonResponse({
    #     'sources': [{
    #         'name': source.name,
    #         'count': source.users()
    #     } for source in sources],
    #     'books': [{
    #         'name': book.title,
    #         'count': book.users()
    #     } for book in books]
    # })
    return JsonResponse({
        "age3_5": User_3_5.stats(),
        "age6_7": User_6_7.stats(),
        "age8_12": User_8_12.stats(),


    })