from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI(title="Aurora Game Proxy")

# Serve static assets (HTML, JS, CSS, Ultraviolet)
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def serve_home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/games", response_class=HTMLResponse)
async def serve_games(request: Request):
    return templates.TemplateResponse("games.html", {"request": request})

if __name__ == "__main__":
    # Start the proxy server locally on port 8080
    uvicorn.run("main:app", host="127.0.0.1", port=8080, reload=True)
