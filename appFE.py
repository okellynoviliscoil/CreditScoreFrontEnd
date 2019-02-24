from flask import render_template
import connexion



# Create the application instance
app = connexion.App(__name__, specification_dir='./')

# Create a URL route in our application for "/"
@app.route('/')
def home():
    """
    This function just responds to the browser ULR
    localhost:5000/
    :return:        the rendered template 'home.html'
    """
    return render_template('home.html')

@app.route('/split')
def split():
    """
    This function just responds to the browser ULR
    localhost:5000/
    :return:        the rendered template 'home.html'
    """
    return render_template('homeSplit.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5055, debug=True)
