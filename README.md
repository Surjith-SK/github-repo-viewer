
# Surjith Assignment - Aquera

An Angular 17 application that uses github API to search username and their profile data along with public repositories. This is developed as per the [requirement](https://awesome-tortoise-525.notion.site/Assignment-Angular-GitHub-Profile-Viewer-d2402b1921154705b24d56561ca81a89)

## Table of contents
1. [Demo](https://github.com/Surjith-SK/github-repo-viewer?tab=readme-ov-file#demo)
2. [Features](https://github.com/Surjith-SK/github-repo-viewer?tab=readme-ov-file#features)
3. [Local Setup & Installation](https://github.com/Surjith-SK/github-repo-viewer?tab=readme-ov-file#local-setup-and-installation)
4. [API Reference](https://github.com/Surjith-SK/github-repo-viewer?tab=readme-ov-file#api-reference)
5. [Deployment](https://github.com/Surjith-SK/github-repo-viewer?tab=readme-ov-file#deployment)
6. [Authors](https://github.com/Surjith-SK/github-repo-viewer?tab=readme-ov-file#authors)
7. [Support](https://github.com/Surjith-SK/github-repo-viewer?tab=readme-ov-file#support)
8. [Improvements](https://github.com/Surjith-SK/github-repo-viewer?tab=readme-ov-file#improvements)

## Demo

Project preview - [Assignment link](https://sk-aquera.netlify.app/home)

![Desktop](https://github.com/Surjith-SK/github-repo-viewer/blob/main/readme-assets/demo.gif)
![Desktop](https://github.com/Surjith-SK/github-repo-viewer/blob/main/readme-assets/demo-mobile.gif)

## Features

- Search Github users by their username
- View Github user profile data
- View Github user repositories in a paginated way
- Error handling on server error, 404 (username not found)
- Pagination
- Responsive UI

## Local Setup and Installation

### Using https

```cmd
    git clone https://github.com/Surjith-SK/github-repo-viewer.git
```
or
### Using ssh

```bash
    git clone git@github.com:Surjith-SK/github-repo-viewer.git
```
or
### Using github cli
or
```bash
    gh repo clone Surjith-SK/github-repo-viewer
```

### Navigate to the project folder and run

```bash
  npm install
  ng serve
```

The application can be accessed on [http://localhost:4200](http://localhost:4200)

## API Reference

#### Search Users

```http
  GET https://api.github.com/search/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q` | `string` | **Required**. Search string |
| `in` | `string` | **Required**. Search type (login or location or...) |

Ex: https://api.github.com/search/users?q=sur+in:login
#### Get User

```http
  GET https://api.github.com/users/{username}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of Github user to fetch |

Ex: https://api.github.com/users/surjith-sk

#### Get Repository

```http
  GET https://api.github.com/users/{username}/repos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. username of Github user to fetch |
| `page`      | `number` | **Optional**. page index/number|
| `per_page`      | `number` | **Optional**. number of items per page|


Ex: https://api.github.com/users/surjithctly/repos?page=1&per_page=10

## Deployment

To generate the build file run

```bash
  ng build
```
and deploy the dist folder to the respected servers.

This project is currently deployed on [netlify](https://sk-aquera.netlify.app/home)

## Authors

- [Surjith-SK](https://www.github.com/surjith-sk)

## Support

For support, email ssksurjithssk@gmail.com.

<img src="https://res.cloudinary.com/sulonya-website/image/upload/v1702311778/profile_pic_daf82dad2b.png" width="200px">

## Improvements

- [ ] Unit test cases
- [ ] UI improvement
- [ ] Additional functionalaties

