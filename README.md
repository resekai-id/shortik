<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://shortik.vercel.app">
    <img src="src/public/images/logo.svg" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Shortik</h3>
  <h5 align="center">Link shortener</h5>
  <a href="https://shortik.vercel.app">
    View Demo
  </a>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#usage">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Shortik Screen Shot][product-screenshot]](https://shortik.vercel.app)

This project was build as a first step towards using PlanetScale, Prisma and tRPC in NextJS, combining both frontend and backend into one full-stack application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Tailwind][Tailwind-css]][Tailwind-url]
* [![tRPC][tRPC-img]][tRPC-url]
* [![planetscale][planetscale-img]][planetscale-url]
* [![prisma][prisma-img]][prisma-url]
* [![vercel][vercel-img]][vercel-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kindageek/shortik.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create `./.env` file and enter your DATABASE_URL
   ```js
   const DATABASE_URL = 'ENTER YOUR DATABASE URL';
   ```
4. Connect to database
   ```sh
   pscale connect db main
   ```
5. Run the program on another window
    ```sh
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

[![Shortik Screen Recording][product-recording]](https://shortik.vercel.app)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sanzhar Nussipbek - [@qdev][linkedin-url] - nsanzhar.99@gmail.com

Shortik: [https://github.com/kindageek/shortik](https://github.com/kindageek/shortik)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-url]: https://linkedin.com/in/qdev
[product-screenshot]: src/public/images/screenshot.png
[product-recording]: src/public/images/recording.gif
[Next.js]: https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind-css]: https://img.shields.io/badge/TailwindCSS-20232A?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4
[Tailwind-url]: https://tailwindcss.com/
[tRPC-img]: https://img.shields.io/badge/trpc-20232A?style=for-the-badge&logo=trpc&logoColor=2596BE
[tRPC-url]: https://trpc.io
[planetscale-img]: https://img.shields.io/badge/planetscale-20232A?style=for-the-badge&logo=planetscale&logoColor=ffffff
[planetscale-url]: https://planetscale.com
[prisma-img]: https://img.shields.io/badge/prisma-20232A?style=for-the-badge&logo=prisma&logoColor=ffffff
[prisma-url]: https://www.prisma.io
[vercel-img]: https://img.shields.io/badge/vercel-20232A?style=for-the-badge&logo=vercel&logoColor=ffffff
[vercel-url]: https://vercel.com