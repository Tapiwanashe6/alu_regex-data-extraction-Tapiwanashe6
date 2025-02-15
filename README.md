
# ALU Regex Data Extraction

This project is part of the ALU curriculum and focuses on extracting various types of data from strings using Regular Expressions (Regex). It provides an implementation in JavaScript that is capable of detecting and extracting specific patterns such as email addresses, phone numbers, URLs, credit card numbers, currency amounts, time formats, HTML tags, and hashtags.

## Project Overview

The goal of this project is to create a tool that uses Regular Expressions to parse and extract important information from large sets of strings. The tool can detect and extract data types from the sample text input. Below are the data types that are being extracted:

- **Email addresses**
- **Phone numbers (various formats)**
- **URLs**
- **Credit card numbers**
- **Currency amounts**
- **Time formats (12-hour and 24-hour)**
- **HTML tags**
- **Hashtags**

The extraction is done using JavaScript regular expressions, and the results are printed to the terminal or browser in a structured format.

## Setup Instructions

To get started with this project, follow the steps below:

### Prerequisites

Before running the project, ensure that you have **Node.js** and **npm** installed. If not, you can install them using the following commands:

1. **Install Node.js and npm:**
   ```bash
   sudo apt update
   sudo apt install nodejs
   sudo apt install npm
   ```

2. **Verify Node.js and npm Installation:**
   ```bash
   node -v
   npm -v
   ```

### Installation

1. **Clone the Repository:**
   Clone this repository to your local machine using Git:
   ```bash
   git clone https://github.com/<YourUsername>/alu_regex-data-extraction-<YourUsername>.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd alu_regex-data-extraction-<YourUsername>
   ```

3. **Install Dependencies:**
   If there are any dependencies (though there may not be any for this simple project), install them by running:
   ```bash
   npm install
   ```

### Running the Application

1. In the terminal, navigate to the directory where the project is stored.

2. **Run the JavaScript File:**
   To extract data from the sample text, run the following command:
   ```bash
   node regex-data-extractor.js
   ```

3. The application will process the sample text and output the extracted data in the terminal.

## Team Details

This project was created as part of the ALU curriculum by the following team members:

- **Tapiwanashe** - Project Lead and Developer

## Features

- Regex patterns designed to extract different types of data such as emails, URLs, credit card numbers, etc.
- Supports multiple formats of data such as different phone number formats and time formats.
- Outputs the extracted data in a clear and structured way.
- Handles common edge cases like missing or malformed data.

## Contributing

1. **Fork the repository** to your GitHub account.
2. **Create a new branch** for your feature (`git checkout -b feature/your-feature`).
3. **Commit your changes** (`git commit -am 'Add new feature'`).
4. **Push to the branch** (`git push origin feature/your-feature`).
5. **Open a pull request** on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

