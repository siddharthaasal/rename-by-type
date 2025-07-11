<a id="readme-top"></a>

<br />
<div align="center">

<h3 align="center">Rename By Type | Dump Folder Organizer</h3>

  <p align="center">
    A simple Node.js utility to classify and rename files in a folder.
    <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future-work">Future Work</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This utility helps organize your cluttered `dump/` folder by classifying files into type-based subdirectories and renaming them in a clean, indexed format.

Organized folders look like this:

```
dump/
├── _images_/
├── _videos_/
├── _audio_/
├── _documents_/
└── _others_/
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* Node.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

Make sure you have Node.js installed.

```sh
node -v
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/siddharthaasal/rename-by-type.git
cd rename-by-type
```

2. Open index.js and set the dumpFolderPath variable (near the top of the file) to the path of your target folder. This is the directory whose files you want to organize.

3. Run the script:

```sh
node index.js
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

* Automatically classifies files into:

  * `_images_`: jpg, jpeg, png, gif
  * `_videos_`: mp4, mkv, avi, mov
  * `_audio_`: mp3, wav, flac
  * `_documents_`: pdf, doc, docx, txt
  * `_others_`: anything else

* Files are renamed to:

```
01_images.jpg
02_images.jpg
...
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Future Work

* [ ] Use `path.join()` for OS-independent compatibility
* [ ] Add support for async file operations
* [ ] Prevent overwriting by checking if renamed file exists
* [ ] Sanitize filenames to remove special characters
* [ ] Add CLI interface (e.g., `--dry-run`, `--input`, `--verbose`)
* [ ] Log actions and errors to a log file
* [ ] Handle files without extensions

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Distributed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Siddharth Aasal - [LinkedIn](https://linkedin.com/in/siddharthaasal) | [Mail](mailto:siddharth@gmail.com)

Project Link: [https://github.com/siddharthaasal/rename-by-type](https://github.com/siddharthaasal/rename-by-type)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

