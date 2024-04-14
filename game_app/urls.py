from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('game_app/', views.game, name='game_app'),
    path('end/<int:score>/', views.end_game, name='end_game'),
]
