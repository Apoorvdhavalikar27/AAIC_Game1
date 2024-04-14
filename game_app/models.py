# models.py

class Animal:
    def __init__(self, name, x_coordinate=0, y_coordinate=0, life=100, color='red'):
        self.name = name
        self.x_coordinate = x_coordinate
        self.y_coordinate = y_coordinate
        self.life = life
        self.color = color

class User:
    def __init__(self, gun_type='gun', bullets=10, points=0):
        self.gun_type = gun_type
        self.bullets = bullets
        self.points = points
