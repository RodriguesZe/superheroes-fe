# Superheroes Backoffice

This is an single page application (SPA), running on top of Angular CLI, version 8.3.14. The main goals were:

* Code that is clean, readable and easy to maintain.
* Code organization following the framework advised best practices.
* Recognize and implement logic that can show case what can be done in app like this.
* Focus on interaction with the API and code best practices. 
* HTML and CSS good practices were a concern. Design (aka making it pretty) was not.
 

## Features available

* **List superheroes**

Lists the superheroes by superhero name. More details about the superhero upon clicking on the superhero name.

* **Search superheroes**

Simple search bar that goes requests the API for superheroes with the requested query. It will lookup for both real and hero name fields.

* **Show and edit superheroes**

Same view, with some JS code to showcase how this logic could be handled. 

It displays all the info related to a superhero.

It's only possible to edit the superhero details (names, publisher and first appearance) in order to not over complicate the update endpoint on the API. 


## Run it locally    

### Requirements
* NodeJS
* npm
* Superheroes API running and available at `http://localhost:8888/api/` (read more about it [here](`https://github.com/RodriguesZe/superheroes-api`))

### Setup

1. Clone repository to <PATH_TO_REPO_ROOT>

2. Install Angular CLI (skip if already installed globally)

```zsh
npm install -g @angular/cli
```

3. Install dependencies

```zsh
npm install
```

4. Serve 

```zsh
ng serve
```

5. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
