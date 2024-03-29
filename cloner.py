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
              "img/logo.png", "img/dark_banner2.png", "img/noise.png", "img/discord.png", "img/cogwheel_b.png", "img/cogwheel_a.png", \
              "img/icons/kindasus.webp" ]

    # We need to make sure this exists
    #if not os.path.exists("docs"):
    #    os.makedirs("docs/")
    if not os.path.exists("css"):
        os.makedirs("css")
    if not os.path.exists("js"):
        os.makedirs("js")
    if not os.path.exists("img"):
        os.makedirs("img")
    if not os.path.exists("img/icons"):
        os.makedirs("img/icons")
    if not os.path.exists("forum"):
        os.makedirs("forum")

    for page in pages:
        url = base_url + page
        content = download_webpage(url)
        if content:
            if page == "":
                page = "index.html"
            elif page == "forum":
                page = "forum/index.html"

            with open(page, "w", encoding="utf-8") as file:
                file.write(content)
            print(f"Page '{url}' downloaded successfully.")

if __name__ == "__main__":
    main()
