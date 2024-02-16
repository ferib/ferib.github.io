import requests
import os

def download_webpage(url):
    try:
        headers = {"apikey": "github-page-cloner-7as12dn12ioud7auisyd12dr44"}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.text
        else:
            print(f"Failed to download {url}. Status code: {response.status_code}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Failed to download {url}. Error: {e}")
        return None

def main():
    base_url = "https://luaobfuscator.com/"
    pages = [ "", "forum", \
              "css/style.css", "css/code-lua.css", \
              "js/luaEngine.js", "js/index.js", \
              "img/logo.png", "img/discord.png", "img/cogwheel_a.png", "img/cogwheel_a.png" ]

    # We need to make sure this exists
    if not os.path.exists("docs"):
        os.makedirs("docs/")
    if not os.path.exists("docs/css"):
        os.makedirs("docs/css")
    if not os.path.exists("docs/js"):
        os.makedirs("docs/js")
    if not os.path.exists("docs/img"):
        os.makedirs("docs/img")
    if not os.path.exists("docs/forum"):
        os.makedirs("docs/forum")

    for page in pages:
        url = base_url + page
        content = download_webpage(url)
        if content:
            if page == "":
                page = "index.html"
            elif page == "forum":
                page = "forum/index.html"

            with open("docs/" + page, "w", encoding="utf-8") as file:
                file.write(content)
            print(f"Page '{url}' downloaded successfully.")

if __name__ == "__main__":
    main()
