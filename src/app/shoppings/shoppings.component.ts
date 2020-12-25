import { Component, OnInit } from '@angular/core';
import * as tess from 'tesseract.js';

export class Purchase {
  name: string;
  count: number;
  price: number;
  totalPrice: number;
}

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.sass']
})
export class ShoppingsComponent {
  parsedLines: string[];
  originalLines: string[];

  read() {
    alert('a');
  }

  reparse() {
    console.log('reparse');
    let ParsedArray = this.parseArray(this.originalLines);
    console.log('reparsed');
    this.originalLines = ParsedArray;

    let that = this;
    let Prices = new Array<Purchase>();

    this.originalLines.forEach(element => {
      Prices.push(that.getPrice(element));
    });
  }

  fileToUpload: File = null;
  gpxtext: string | ArrayBuffer;
  prsdText: string;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    const worker = tess.createWorker();

    let that = this;

    async function getTextFromImage() {
      await worker.load();
      await worker.loadLanguage('pol');
      await worker.initialize('pol');

      console.log(that.fileToUpload);
      console.log('reading');
      const { data: { text } } = await worker.recognize(that.fileToUpload);
      that.prsdText = text;
      console.log(text);
      console.log(that.prsdText);

      that.originalLines = that.prsdText.split("\n");
      that.parsedLines = that.prsdText.split("\n");
      console.log(that.parsedLines);
      that.parseArray(that.parsedLines);

      console.log('finished reading');
      worker.terminate();
    };

    getTextFromImage();
  };

  Products: Array<Purchase>;

  parseArray(lines: Array<String>): string[] {
    let gotParagon: boolean = false;
    let gotSprzeda: boolean = false;

    for (var i = 0; i < lines.length - 1; i++) {
      if (!gotParagon) {
        lines.splice(0, 1);
      }

      if (lines[0].toString().toLowerCase().includes('paragon')) {
        lines.splice(0, 1);
        gotParagon = true;
      }

      if (lines[i].toString().toLowerCase().includes('sprzeda')) {
        gotSprzeda = true;
      }

      if (gotSprzeda) {
        lines.splice(i, 1);
        i--;
      }
    }

    var lines = lines.filter(function (el) {
      return el.trim() != '';
    });

    console.log('wyczyszczony array z poczatku i konca');
    console.log(lines);
    let elementIndex: number = -1;

    lines.forEach(element => {
      elementIndex++;
      let trimmedElement = element.trimRight();
      trimmedElement = trimmedElement.trimLeft();
      console.log('czyszcze element ze znaczkow po prawej');
      console.log('wiersz: ' + trimmedElement);

      for (var i = trimmedElement.length - 1; i >= 0; i--) {
        console.log('sprawdzam literke ' + trimmedElement[i]);
        if (!this.isNumeric(trimmedElement[i])) {
          console.log('nie jest numeryczna');
          trimmedElement = trimmedElement.substring(0, trimmedElement.length - 1);
          console.log('po ucieciu ' + trimmedElement);
        }
        else {
          lines[elementIndex] = trimmedElement;
          break;
        }
      }
    });

    console.log('wyczyszczony array ze znaczkow po prawej od cen');
    console.log(lines);

    return (lines as string[]);
  }

  getPrice(s: string): Purchase {
    let count: number = 0;
    let singularPrice: number = 0;
    let price: string = '';
    let totalPrice: number = 0;
    let countOfComas: number = 0;
    let canBeFullNumber: boolean = false;
    let countOfPrices: number = 0;
    let name: string;
    let purch: Purchase = new Purchase();

    for (var i = s.length - 1; i >= 0; i--) {
      if (this.isNumeric(s[i])) {
        price = s[i] + price;
      }

      if (s[i] === ',' || s[i] === '.') {
        countOfComas++;
        price = '.' + price;
      }

      if (s[i] === ' ') {
        if (countOfComas === 1 && this.isNumeric(s[i + 1]) && countOfPrices === 0) {
          countOfPrices++;
          totalPrice = parseFloat(price);
          price = '';
          continue;
        }

        if (countOfComas === 2 && s[i + 1].includes('x') && countOfPrices === 1) {
          countOfPrices++;
          singularPrice = parseFloat(price);
          price = '';
          continue;
        }

        if (countOfComas >= 2 && s[i] === ' ' && countOfPrices === 2) {
          count = parseFloat(price);
          name = s.substring(0, i);
          break;
        }
      }
    }
    purch.totalPrice = totalPrice;
    purch.price = singularPrice;
    purch.count = count;
    purch.name = name;
    return purch;
  }

  isNumeric(s) {
    return !isNaN(s - parseFloat(s));
  }

  parseFile(fileString: any) {
    console.log(fileString);
  }
}
