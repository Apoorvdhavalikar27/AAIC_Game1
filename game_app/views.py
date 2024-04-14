from django.shortcuts import render
from django.http import HttpResponse
from .models import Animal, User

def home(request):
    """Render the homepage with a form to start the game."""

    return render(request, 'game_app/home.html')

def game(request):

    user = User()
    animals = [
        Animal(name='Tiger', x_coordinate=700, y_coordinate=100, color='Red'),
        Animal(name='Lion', x_coordinate=200, y_coordinate=260, color='tomato'),
        Animal(name='Deer', x_coordinate=300, y_coordinate=150, color='pink'),
        Animal(name='Wolf', x_coordinate=400, y_coordinate=220, color='skyblue'),
        Animal(name='Jaguar', x_coordinate=100, y_coordinate=100, color='blue'),
        Animal(name='Zebra', x_coordinate=750, y_coordinate=210, color='white'),
        Animal(name='Fox', x_coordinate=550, y_coordinate=250, color='orange'),
        Animal(name='Hyena', x_coordinate=600, y_coordinate=100, color='yellow'),
        Animal(name='Hippo', x_coordinate=350, y_coordinate=120, color='gray'),
        Animal(name='Bear', x_coordinate=259, y_coordinate=200, color='gray'),

    ]


    context = {
        'user': user,
        'animals': animals,
    }

    return render(request, 'game_app/game_app.html', context)

def end_game(request, score):
    context = {'score': score}
    return render(request, 'game_app/end_game.html', context)


