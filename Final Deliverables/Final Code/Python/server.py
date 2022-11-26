from flask import Flask, render_template, request 
import os


appFlask = Flask(__name__)
picFolder = os.path.join('static','images')
appFlask.config['UPLOAD_FOLDER'] = picFolder


@appFlask.route('/')
@appFlask.route('/out') 
def index():
    return render_template("login.html") 

@appFlask.route('/login',methods = ['POST', 'GET'])
def my_forum_post():
    return render_template('FashionVibe.html')

@appFlask.route('/index',methods = ['POST', 'GET'])
def my_forum_posts():
    return render_template('index.html')

@appFlask.route('/Feed',methods = ['POST', 'GET'])
def my_forum_posts1():
    return render_template('Feedback.html')


if __name__ == "__main__":
    appFlask.run(debug=True)   