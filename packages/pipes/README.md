![npm](https://img.shields.io/npm/v/@nglrx/pipes?label=npm)
![GitHub last commit](https://img.shields.io/github/last-commit/nglrx/pipes)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@nglrx/pipes)
[![Build Status](https://travis-ci.org/nglrx/pipes.svg?branch=master)](https://travis-ci.org/nglrx/pipes)
[![codecov](https://codecov.io/gh/nglrx/pipes/branch/master/graph/badge.svg)](https://codecov.io/gh/nglrx/pipes)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nglrx_pipes&metric=alert_status)](https://sonarcloud.io/dashboard?id=nglrx_pipes)
![npm](https://img.shields.io/npm/dm/@nglrx/pipes)
![GitHub](https://img.shields.io/github/license/nglrx/pipes?color=blue)

# @nglrx/pipes

A library of pipes for Angular apps.

## Installation

Use [npm](https://www.npmjs.com/) to install @nglrx/pipes.

```bash
npm i @nglrx/pipes
```

## Import Module

Import module `NglrxPipesModule` to your module for using all pipes.

```typescript
import { NglrxPipesModule } from '@nglrx/pipes';

@NgModule({
  //...
  imports: [
    NglrxPipesModule
  ]
})
export class YourModule { }
```

Alternatively, you can use pipes from specific module(s) like `NglrxNumberPipesModule` or `NglrxStringPipesModule`.

## Usage of Pipes

Pipes can be used in your component's *template*

```html
{{ 'This-is-a-string' | length }}
<!-- Returns 16 -->
```

They can also be *chained*

```html
{{ '  Another-string  ' | trim | length }}
<!-- Returns 14 -->
```

Or they can be used within *components* or *services* by calling the `transform` method

```typescript
import { LengthPipe } from '@nglrx/pipes';

@Component({
  providers: [ LengthPipe ]
})
export class YourComponent {
  
  constructor(private lengthPipe: LengthPipe) {
    this.lengthPipe.transform('Yet-another-string'); // Returns 18
  }
}
```


## Library of Pipes

- [String Pipes](#string-pipes)
  - [camelCase](#camelcase)
  - [charAt](#charat)
  - [concat](#concat)
  - [interpolate](#interpolate)
  - [lowerCase](#lowercase)
  - [padEnd](#padend)
  - [padStart](#padstart)
  - [pascalCase](#pascalcase)
  - [repeat](#repeat)
  - [sentenceCase](#sentencecase)
  - [slugify](#slugify)
  - [split](#split)
  - [titleCase](#titlecase)
  - [trim](#trim)
  - [trimLeft](#trimleft)
  - [trimRight](#trimright)
  - [truncate](#truncate)
  - [upperCase](#uppercase)
- [Number Pipes](#number-pipes)
  - [abs](#abs)
  - [avg](#avg)
  - [max](#max)
  - [min](#min)
  - [pct](#pct)
  - [pow](#pow)
  - [round](#round)
  - [sqrt](#sqrt)
  - [sum](#sum)
- [Array Pipes](#array-pipes)
  - [combine](#combine)
  - [copyWithin](#copywithin)
  - [every](#every)
  - [fill](#fill)
  - [first](#first)
  - [join](#join)
  - [last](#last)
  - [map](#map)
  - [some](#some)
- [Generic Pipes](#generic-pipes)
  - [length](#length)
  - [reverse](#reverse)
  - [typeOf](#typeof)


## String Pipes

A collection of pipes exported by `NglrxStringPipesModule`.


### camelCase

Converts a string to camel case and strips hyphens, underscores and whitespaces.

Usage: `string | camelCase`

```html
{{ 'Convert_to camel-case' | camelCase }}
<!-- Returns 'convertToCamelCase' -->
```


### charAt

Returns the character value at given position in a string.

Usage: `string | charAt [ : position ]`

Range of position is from 0 (default) to n-1, where n is length of the string.

```html
{{ 'This is a sample string.' | charAt: 12 }}
<!-- Returns 'm' -->
```


### concat

Concatenates one or more string(s) to current string at the end.

Usage: `string | concat: string1 [ : string2 ] ...`

```html
{{ 'This' | concat: ' is': ' a': ' string': '!' }}
<!-- Returns 'This is a string!' -->
```


### interpolate

Replaces marked up parameters surrounded by { and } delimiters in given string with target string values.\
The indices of parameters start from 0 and increment by 1.\
The target string values can be literals or variables and their position should match the index.

Usage: `string | interpolate: string1 [ : string2 ] ...`

```html
{{ 'This {0} an {1} {2}!' | interpolate: 'is': 'interpolated': 'string' }}
<!-- Returns 'This is an interpolated string!' -->
```


### lowerCase

Converts a given string to lower case.

Usage: `string | lowerCase`

```html
{{ 'Convert TO LoWeR-case' | lowerCase }}
<!-- Returns 'convert to lower-case' -->
```


### padEnd

Pads the given string with a fill string so that the resulting string reaches the specified max length. The fill string is appended to the given string.\
Default fill string is space `' '`.

Usage: `string | padEnd: maxLength [ : fillString ]`

```html
{{ This is a test string! | padEnd: 29: '---' }}
<!-- Returns 'This is a test string!-------' -->
```


### padStart

Pads the given string with a fill string so that the resulting string reaches the specified max length. The fill string is prepended to the given string.\
Default fill string is space `' '`.

Usage: `string | padStart: maxLength [ : fillString ]`

```html
{{ This is a test string! | padStart: 27: '--' }}
<!-- Returns '-----This is a test string!' -->
```


### pascalCase

Converts a string to pascal case and strips hyphens, underscores and whitespaces.

Usage: `string | pascalCase`

```html
{{ 'convert_to PASCAL-case' | pascalCase }}
<!-- Returns 'ConvertToPascalCase' -->
```


### repeat

Repeats a given string 'count' number of times separated by an optional delimiter.\
Default count is `1`. Default delimiter is empty string `''`.\
An error is thrown if the value of count is less than 1.

Usage: `string | repeat [ : count ] [ : delimiter ]`

```html
{{ 'Repeated' | repeat: 5: '_' }}
<!-- Returns Repeated_Repeated_Repeated_Repeated_Repeated -->
```


### sentenceCase

Converts a string to sentence case.

Usage: `string | sentenceCase`

```html
{{ 'convert TO Sentence case.' | sentenceCase }}
<!-- Returns 'Convert to sentence case.' -->
```


### slugify

Slugifies a given string with an optional char separator.
Default separator char is hyphen '-'.\
Special characters are stripped from string.

Usage: `string | slugify [ : separator ]`

```html
{{ 'this_-is__a - string!' | slugify: '_' }}
<!-- Returns 'this_is_a_string' -->
```


### split

Splits a given string into an array of sub-strings using an optional delimiter.\
Default delimiter is space `' '`.\
Optionally, you may also specify a limit (integer) on the number of splits.

Usage: `string | split [ : delimiter ] [ : limit ]`

```html
{{ 'This_is_a_string_separated_with_underscore' | split: '_': 4 }}
<!-- Returns ['This', 'is', 'a', 'string'] -->
```


### titleCase

Converts a string to titleCase case.

Usage: `string | titleCase`

```html
{{ 'convert TO title cASE.' | titleCase }}
<!-- Returns 'Convert To Title Case.' -->
```


### trim

Strips the leading and trailing whitespaces from a given string.

Usage: `string | trim`

```html
{{ ' This is a test string!  ' | trim }}
<!-- Returns 'This is a test string!' -->
```


### trimLeft

Strips the leading whitespaces from a given string.

Usage: `string | trimLeft`

```html
{{ ' This is a test string!  ' | trimLeft }}
<!-- Returns 'This is a test string!  ' -->
```


### trimRight

Strips the trailing whitespaces from a given string.

Usage: `string | trimRight`

```html
{{ ' This is a test string!  ' | trimRight }}
<!-- Returns ' This is a test string!' -->
```


### truncate

Shortens the given string to specified `length` followed by an ellipsis `'...'`.
Optionally, you may also specify a suffix (string).
An error is thrown if the value of `length` is less than 1.

Usage: `string | truncate : length [ : suffix ]`

```html
{{ 'This is a test string!' | truncate : 14 }}
<!-- Returns 'This is a test...' -->
```


### upperCase

Converts a given string to upper case.

Usage: `string | upperCase`

```html
{{ 'Convert TO UpPeR-case.' | upperCase }}
<!-- Returns 'CONVERT TO UPPER-CASE.' -->
```


## Number Pipes

A collection of pipes exported by `NglrxNumberPipesModule`.


### abs

Returns the absolute value of given number.

Usage: `number | abs`

```html
{{ -384 | abs }}
<!-- Returns 384 -->
```


### avg

Returns the average of all numbers in a given array.

Usage: `array | avg`

```html
{{ [10, 45, 200, 5, 92] | avg }}
<!-- Returns 70.4 -->
```


### max

Finds the maximum from an array of numbers.

Usage: `array | max`

```html
{{ [10, 45, 200, 5, 92] | max }}
<!-- Returns 200 -->
```


### min

Finds the minimum from an array of numbers.

Usage: `array | min`

```html
{{ [10, 45, 200, 5, 92] | min }}
<!-- Returns 5 -->
```


### pct

Returns how much percent is a number of the given total. If not specified default value is 100.\
Optionally, number of decimal places (integer) may be specified to round-off the percentage.

Usage: `number | pct [ : total ] [ : decimalPlaces ]`

```html
{{ 25 | pct: 483: 2 }}
<!-- Returns 5.18 -->
```


### pow

Returns the value of the base raised to a specified power.\
Default value of exponent is 0.

Usage: `base | pow [ : exponent ]`

```html
{{ 4 | pow: 3 }}
<!-- Returns 64 -->
```


### round

Returns the rounded value of given number. By default the value is rounded to the nearest integer.

It also accepts an optional argument `RoundType` for rounding the value up or down.\
`RoundType.Default` = Default rounding as in `Math.round()`\
`RoundType.Floor` = Round down as in `Math.floor()`\
`RoundType.Ceil` = Round up as in `Math.ceil()`

Optionally, the number of decimal places to which the result should be rounded may also be specified.

Usage: `number | round [ : decimalPlaces] [ : roundType ]`

```html
{{ 1234.56789 | round }}
<!-- Returns 1235 -->

{{ 1234.56789 | round: 3: RoundType.Floor }}
<!-- Returns 1234.567 -->

{{ 9876.54321 | round: 2: RoundType.Ceil }}
<!-- Returns 9876.54 -->
```


### sqrt

Returns the square root of given number.

Usage: `number | sqrt`

```html
{{ 625 | sqrt }}
<!-- Returns 25 -->
```


### sum

Returns the sum of all numbers in a given array.

Usage: `array | sum`

```html
{{ [10, 45, 200, 5, 92] | sum }}
<!-- Returns 352 -->
```


## Array Pipes

A collection of pipes exported by `NglrxArrayPipesModule`.


### combine

Combines an array with other array(s) or single items of same type.

Usage: `array | combine [ : element | array ]...`

```html
{{ ['a', 'b', 'c'] | combine: ['d', 'e']: 'f' }}
<!-- Returns ['a', 'b', 'c', 'd', 'e', 'f'] -->
```


### copyWithin

Copies the portion of array marked by start and end to position specified by `target` within the same array.

If `start` is not specified then it copies from the beginning of array. If `end` is not specified then it copies till the end of array.\
Negative values of start and end are treated as length + start/end.

Usage: `array | copyWithin : target [ : start ] [ : end ]`

```html
{{ [1, 2, 3, 4, 5, 6] | copyWithin: 4: 1: -3 }}
<!-- Returns [1, 2, 3, 4, 2, 3] -->
```


### every

Checks whether all the elements of the given array satisfy the specified test.

A `callbackFn` function must be specified that accepts up to three arguments. The callbackFn is invoked for each element in the given array until it returns a false, or until the last element of the array.\
Optionally, a reference `thisArg` to an object to which the `this` keyword can refer in the callbackFn function may be passed.

Usage: `array | every : callbackFn`

```html
{{ ['a', 'b', 'c', 'd', 'e'] | every: (n: string) => n !== '' }}
<!-- Returns true -->

{{ [10, 11, 12, 13, 14] | every: (n: number) => n % 2 === 0) }}
<!-- Returns false -->
```


### fill

Fills the portion of array marked by start and end with specified `value` of same type as array.

If `start` is not specified then it fills from the beginning of array. If `end` is not specified then it fills till the end of array.\
Negative values of start and end are treated as length + start/end.

Usage: `array | fill : value [ : start ] [ : end ]`

```html
{{ ['a', 'b', 'c', 'd', 'e', 'f'] | fill: '-': 2: -2 }}
<!-- Returns ['a', 'b', '-', '-', 'e', 'f'] -->
```


### first

Returns the first `count` elements from the given array.

If no count is specified, by default the first element is returned.\
Negative value of count is treated as `length + count` and values except last `length + count` are returned.\
No values are returned if either count is `0` or value of count is beyond the limits.

Usage: `array | first [ : count ]`

```html
{{ ['a', 'b', 'c', 'd', 'e'] | first }}
<!-- Returns ['a'] -->

{{ [1, 2, 3, 4, 5] | first: 2 }}
<!-- Returns [1, 2] -->

{{ [1, 2, 3, 4, 5] | first: -2 }}
<!-- Returns [1, 2, 3] -->
```


### join

Creates a string by concatenating all the strings in the given array using a separator.\
If unspecified, the default separator is comma `','`.

Usage: `array | join [ : separator ]`

```html
{{ ['This', 'is', 'a', 'string'] | join: '_' }}
<!-- Returns 'This_is_a_string' -->
```


### last

Returns the last `count` elements from the given array.

If no count is specified, by default the last element is returned.\
Negative value of count is treated as `length + count` and values except first `length + count` are returned.\
No values are returned if either count is `0` or value of count is beyond the limits.

Usage: `array | last [ : count ]`

```html
{{ ['a', 'b', 'c', 'd', 'e'] | last }}
<!-- Returns ['e'] -->

{{ [1, 2, 3, 4, 5] | last: 2 }}
<!-- Returns [4, 5] -->

{{ [1, 2, 3, 4, 5] | last: -2 }}
<!-- Returns [3, 4, 5] -->
```


### map

Calls the specified callback function on each element of the given array, and returns an array of results returned by callback function.

A `callbackFn` function must be specified that accepts up to three arguments. The callbackFn is invoked for each element in the given array.\
Optionally, a reference `thisArg` to an object to which the `this` keyword can refer in the callbackFn function may be passed.

Usage: `array | map : callbackFn`

```html
{{ ['a', 'b', 'c', 'd', 'e'] | map: (n: string) => n.toUpperCase() }}
<!-- Returns ['A', 'B', 'C', 'D', 'E'] -->

{{ [1, 2, 3, 4, 5] | map: (n: number) => n * n) }}
<!-- Returns [1, 4, 9, 16, 25] -->
```


### some

Checks whether some the elements of the given array satisfy the specified test.

A `callbackFn` function must be specified that accepts up to three arguments. The callbackFn is invoked for each element in the given array until it returns a true, or until the last element of the array.\
Optionally, a reference `thisArg` to an object to which the `this` keyword can refer in the callbackFn function may be passed.

Usage: `array | some : callbackFn`

```html
{{ ['a', 'b', 'c', 'd', 'e'] | some: (n: string) => n === '' }}
<!-- Returns false -->

{{ [10, 11, 12, 13, 14] | some: (n: number) => n % 2 === 0) }}
<!-- Returns true -->
```


## Generic Pipes

A collection of pipes exported by `NglrxGenericPipesModule`.


### length

Returns the length of a given value of any supported type.\
Supported data types are string, array, number, boolean, or any data type which has own property 'length'.\
For an array the number of elements is returned. For others the number of characters in value is returned.

Usage: `value | length`

```html
{{ 'This is a test string!' | length }}
<!-- Returns 22 -->

{{ [10, 45, 200, 50, 92] | length }}
<!-- Returns 5 -->
```


### reverse

Reverses a given value of any supported type.\
Supported data types are string, array, number, boolean.\
For an array the sequence of elements is reversed. For others the sequence of characters in value is reversed.

Usage: `value | reverse`

```html
{{ 'This is a test string!' | reverse }}
<!-- Returns '!gnirts tset a si sihT' -->

{{ ['a', 'b', 'c', 'd', 'e'] | reverse }}
<!-- Returns ['e', 'd', 'c', 'b', 'a'] -->
```


### typeOf

Returns the type of given value.\
Returns the name of the type in string. All types are supported.

Usage: `value | typeOf`

```html
{{ 'This is a test string!' | typeOf }}
<!-- Returns 'string' -->

{{ { foo: 'bar' } | typeOf }}
<!-- Returns 'object' -->
```

\
For more information on pipes, refer to [Angular - pipes](https://angular.io/guide/pipes) documentation.
