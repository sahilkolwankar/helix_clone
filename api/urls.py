from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('questions/', views.getQuestions, name="get all questions"),
    path('questions/create/', views.createQuestion, name="creates a new question"),
    path('questions/<str:pk>/update/', views.updateQuestion, name="update question"),
    path('questions/<str:pk>/delete/', views.deleteQuestion, name="delete question"),
    path('questions/<str:pk>/', views.getQuestion, name="get question by id")
]