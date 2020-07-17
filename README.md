# Photos app

The test consists in building an application that searchs hangarww images. You will be provided with the assets.

### App. Requirements

#### First Screen (start.jpg)

- the user should see a logo and a background.
- the logo should be clickeable.
- when the user click the logo it will be taken to the search screen.

#### Second Screen (search.jpg)

- the user should see a background.
- the user should see an input and be able to enter text.
- when the user press the enter keyboard a search ajax request should be made.
- the user should be getting the info from the fake server api.

- when the user arrived to the search screen 11 images should be populated.
- the images should be clickeable.
- when the user click on an image an ajax request should be made for it.
- the user will be able to see the detail of the image as (detail.jpg) shows.
- when the user see the image detail information an animation maybe added.

### How to start the json-server (\*if is require)

You will need to start a fake `json-server`. go inside de `db` folder and run the fake server with this command:

```
  npm i && npm start
```

### notes

You can see the design and prototype on [figma](https://www.figma.com/file/N4HoMHw3EGuMfga5DXUvaZ/Hangar-Photos?node-id=4%3A10).

Server response item example:

```json
{
  "id": "nj18pdvjyuquyesk",
  "image": "/images/images_11.png",
  "title": "Roberta O'Hara",
  "description": "Sed adipisci rerum quae et quia et. Quia minus"
}
```
