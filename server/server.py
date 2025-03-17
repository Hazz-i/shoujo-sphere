from flask import Flask, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import logging
import os

from scrapingAnime.animeHome import scrape_home_anime, scrape_batch_home, scrape_top_anime_list
from scrapingAnime.ongoingAnime import scrape_ongoing_anime
from scrapingAnime.episodes import scrape_anime_episodes
from scrapingAnime.players import scrape_anime_players
from scrapingAnime.downloads import scrape_anime_downloads
from scrapingAnime.searchAnime import scrape_search_anime
from scrapingAnime.batchAnime import scrape_batch_anime
from scrapingAnime.genres import scrape_anime_genres, scrape_grene, scrape_grene_pages

from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS = CORS(app, origins=os.getenv('FLASK_CORS_ORIGINS'))

@app.route('/', methods=['GET'])
def index():
    return jsonify({'success': "success", 'message': "hayooo mo cari apa"})

@app.route('/api/shoujo-sphere/home', methods=['GET'])
def home():
    try:
        # Memanggil fungsi untuk mendapatkan data anime
        anime_url = "https://otakudesu.cloud/"
        anime_data = scrape_home_anime(anime_url)
        anime_batch_data = scrape_batch_home(anime_url)
        
        anime_list = "https://myanimelist.net/topanime.php?type=bypopularity&limit=0"
        top_anime_list = scrape_top_anime_list(anime_list)
        
        if anime_data or anime_batch_data or top_anime_list:
            results = {
                'anime': anime_data if anime_data else [],
                'batch': anime_batch_data if anime_batch_data else [],
                'top_anime_list': top_anime_list if top_anime_list else []
            }
            
            return jsonify({'success': "success", 'data': results})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500

@app.route('/api/shoujo-sphere/genres', methods=['GET'])
def genres():
    try:
        genres = "https://otakudesu.cloud/genre-list/"

        anime_genres = scrape_anime_genres(genres)
        
        if anime_genres:
            return jsonify({'success': "success", 'data': anime_genres})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500
    
@app.route('/api/shoujo-sphere/genres/<genre>/<page>', methods=['GET'])
def genres_data(genre, page):
    try:
        sub_genres = f'https://otakudesu.cloud/genres/{genre}/page/{page}/'

        genre_data = scrape_grene(sub_genres)
        genre_pages = scrape_grene_pages(sub_genres)

        if genre_data or genre_pages:
            results = {
                'genre_data': genre_data if genre_data else [],
                'genre_pages': genre_pages if genre_pages else []
            }
            return jsonify({'success': "success", 'data': results})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500
    

@app.route('/api/shoujo-sphere/ongoing-all', methods=['GET'])
def ongoing():
    try:
        page = 1
        results = []

        while True:
            url = f'https://otakudesu.cloud/ongoing-anime/page/{page}/'
            logging.info(f"Scraping page {page}")
            data = scrape_ongoing_anime(url)

            if data:
                results.extend(data)
                page += 1
            else:
                logging.info(f"No more data found on page {page}. Stopping.")
                break  

        if results:
            return jsonify({'success': "success", 'data': results})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404
            
            
    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500
    
@app.route('/api/shoujo-sphere/batch-all', methods=['GET'])
def batch():
    try:
        page = 1
        results = []

        while True:
            url = f'https://otakudesu.cloud/complete-anime/page/{page}/'
            logging.info(f"Scraping page {page}")
            data = scrape_batch_anime(url)

            if data:
                results.extend(data)
                page += 1
            else:
                logging.info(f"No more data found on page {page}. Stopping.")
                break  

        if results:
            return jsonify({'success': "success", 'data': results})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404
            
            
    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500

@app.route('/api/shoujo-sphere/<anime>/details', methods=['GET'])
def details(anime):
    try:
        url = f"https://otakudesu.cloud/anime/{anime}/"
        data = scrape_anime_episodes(url)
        
        if data:
            results = []
            results.extend(data)
            
            return jsonify({'success': "success", 'data': results})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500
    

@app.route('/api/shoujo-sphere/<anime>/<episode>', methods=['GET'])
def players(anime, episode):
    try:
        # Validate parameters
        if not anime or not episode:
            return jsonify({'success': "fail", 'message': "Invalid parameters."}), 400

        url = f"https://otakudesu.cloud/episode/{episode}/"
        
        # Log the URL being accessed
        logging.info(f"Accessing URL: {url}")

        data = scrape_anime_players(url)
        
        if data:
            results = []
            results.extend(data)
            return jsonify({'success': "success", 'data': results})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404

    except Exception as e:
        # Log the error with traceback for better debugging
        logging.error(f"An error occurred: {e}", exc_info=True)
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500

    
@app.route('/api/shoujo-sphere/<anime>/<episode>/downloads', methods=['GET'])
def downloads(anime, episode):
    try:
        if not anime or not episode:
            return jsonify({'success': "fail", 'message': "Invalid parameters."}), 400

        url = f"https://otakudesu.cloud/episode/{episode}/"
        data = scrape_anime_downloads(url)
        
        if data:
            results = []
            results.extend(data)
            
            return jsonify({'success': "success", 'data': results})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500

@app.route('/api/shoujo-sphere/search=<anime>', methods=['GET'])
def search(anime):
    try:
        animeSearch = anime.replace(" ", "+")
        if not anime:
            return jsonify({'success': "fail", 'message': "Invalid parameters."}), 400

        url = f"https://otakudesu.cloud/?s={animeSearch}&post_type=anime"
        data = scrape_search_anime(url)
        
        if data:
            results = []
            results.extend(data)
            
            return jsonify({'success': "success", 'data': results})
        else:
            return jsonify({'success': "fail", 'message': "No data was scraped."}), 404

    except Exception as e:
        logging.error(f"An error occurred: {e}")
        return jsonify({'success': "fail", 'message': "An error occurred.", 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host=os.getenv('FLASK_RUN_HOST', '0.0.0.0'), port=os.getenv('FLASK_RUN_PORT', 8080))