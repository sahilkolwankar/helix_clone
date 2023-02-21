from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Question
from .serializers import QuestionSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/questions/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of questions'
        },
        {
            'Endpoint': '/questions/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a question by id'
        },
        {
            'Endpoint': '/questions/create',
            'method': 'POST',
            'body': {'title': "", 'body': ""},
            'description': 'Creates a new question'
        },
        {
            'Endpoint': '/questions/update',
            'method': 'PUT',
            'body': {'title': "", 'body': ""},
            'description': 'Updates a question by id'
        },
        {
            'Endpoint': '/questions/id/delete',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes a question by id'
        }
    ]
    
    return Response(routes)

@api_view(['GET'])
def getQuestions(request):
    questions = Question.objects.all()
    # many -> serialize multiple objects or just one? -> many
    serializer = QuestionSerializer(questions, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getQuestion(request, pk):
    questions = Question.objects.get(id=pk)
    # many -> serialize multiple objects or just one? -> just one
    serializer = QuestionSerializer(questions, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createQuestion(request):
    data = request.data
    question = Question.objects.create(
        title=data['title'],
        body=data['body']
    )
    serializer = QuestionSerializer(question, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateQuestion(request, pk):
    data = request.data
    question = Question.objects.get(id=pk)
    serializer = QuestionSerializer(instance=question, data=data)
    
    if serializer.is_valid():
        serializer.save()
    
    
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteQuestion(request, pk):
    question = Question.objects.get(id=pk)
    question.delete()
    return Response('The question was deleted!')