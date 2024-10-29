# Paventomino

## What is Paventomino?

Name is a play on words from the verb "pave" wich mains to lay or cover stones or tiles. And "ventomino" is a play on words refering to the "Pentomino" game.


## How to use

App url: [Paventomino.app](https://paventomino.app)

See the video on [YouTube](https://youtu.be/YI9bnERW6ag)

TBD.

1. Draw your room,
2. Click on "Complete drawing" this will lock the the points,
3. Set the tile size and joint size (space between the tiles in the pallete),
4. Set the tile image by clicking on browse under the "Tile" title,
5. The button "Draw tile matrix" should not be enabled, click on it and wait a while.

Now, after the tile matrix is rendered, you can move the tile matrix in the room using the arrows controls under the "Tile" title. You can also control of dysplaing the tiles images in the matrix, joints...etc.
The app has limited support for printing the draw plan using the device print shortcut (e.g. Windows: `CTRL`+`P`).

## Reason for creation

Hobby project.

When we have a room and a tile, we need to know how many of the tiles are needed to cover the room. Also, we need to know, how to pave the tiles in a way that the room is covered and the tiles are not cut or cutted in a way, that would be visually unpleasing.

The problem: there are many of the tiles sellers but no one is providing a solution for the problem above or, provided solutions are so complex, per provider specivic and does not allow to choose any tile style offered by the tile seller.

So, for our room we have a choosed tile but the seller does not support to render it in any tile planner BUT he provides a good image for the tile grafic desing.
We endup with a tile and our room, both has a width and a height but because of the mensioned problems we can not use the tile in any tile planner.

To solve my problem, I created this simple web app Paventomino, that has an simple ability to draw the room and generates the tiles palette by the given tile image.

## Technical detail

Blazor WASM app without any backend. [https://fluentui-blazor.net/ ](https://fluentui-blazor.net/) components.

Deployment using GH actions.

Running on GH Pages and [Crown](https://www.cloudflare.com/) static pages.

Integrated with [Prerender.io](https://prerender.io/) and [Crown](https://www.cloudflare.com/) to be crawlers friendly.
