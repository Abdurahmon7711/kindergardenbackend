from django.urls import path
from . import views



urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('classes', views.classes, name='classes'),
    path('sites', views.sites, name='sites'),
    path('contact', views.contact, name='contact'),
    path('ebooks', views.ebooks, name='ebooks'),
    path('audiobooks', views.audiobooks, name='audiobooks'),
    path('clips', views.clips, name='clips'),
    path('skilllessons', views.skill_lessons, name='skilllessons'),
    path('interestingphotos', views.interesting_photos, name='interestingphotos'),
    path('games', views.games, name='games'),
    path('register_ages/<int:start>/<int:end>', views.register_ages, name='register_ages'),
    path('api/get_statistic', views.get_statistic, name='get_statistic'),
]