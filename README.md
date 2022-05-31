<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterLinspace

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which returns evenly spaced numbers over a specified interval.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterLinspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-linspace@esm/index.mjs';
```

#### iterLinspace( start, stop\[, N] )

Returns an iterator which returns evenly spaced numbers over a specified interval.

```javascript
var it = iterLinspace( 0, 99 );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

By default, the iterator returns `100` values. To return an alternative number of values over the specified interval, provide an `N` argument.

```javascript
var it = iterLinspace( 0, 10, 3 );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 5

v = it.next().value;
// returns 10

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned iterator is guaranteed to return the `start` and `stop` values. Beware, however, that values between the `start` and `stop` are subject to floating-point rounding errors. For example,

    ```javascript
    var it = iterLinspace( 0.0, 1.0, 3 );
    // returns <Object>

    var v = it.next().value;
    // returns 0

    v = it.next().value;
    // returns ~0.5

    v = it.next().value;
    // returns 1.0
    ```

    where the second iterated value is only guaranteed to be **approximately** equal to `0.5`. If you desire more control over value precision, consider using [roundn][@stdlib/math/base/special/roundn]:

    ```javascript
    import roundn from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@esm/index.mjs';
    import iterMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-map@esm/index.mjs';

    function round( v ) {
        return roundn( v, -2 );
    }

    // Create an iterator returning values subject to floating-point errors:
    var it1 = iterLinspace( 0.0, 1.0, 21 );

    // Create an iterator to round each value to the nearest hundredth:
    var it2 = iterMap( it1, roundn );

    // Perform manual iteration...
    var v;
    while ( true ) {
        v = it2.next();
        if ( v.done ) {
            break;
        }
        console.log( v.value );
    }
    ```

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import iterLinspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-linspace@esm/index.mjs';

// Create a "countdown" iterator:
var it = iterLinspace( 100, 0, 101 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>
-   <span class="package-name">[`@stdlib/iter/datespace`][@stdlib/iter/datespace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced dates over a specified interval.</span>
-   <span class="package-name">[`@stdlib/iter/incrspace`][@stdlib/iter/incrspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced numbers according to a specified increment.</span>
-   <span class="package-name">[`@stdlib/iter/logspace`][@stdlib/iter/logspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced numbers on a log scale.</span>
-   <span class="package-name">[`@stdlib/iter/step`][@stdlib/iter/step]</span><span class="delimiter">: </span><span class="description">create an iterator which returns a sequence of numbers according to a specified increment.</span>
-   <span class="package-name">[`@stdlib/iter/unitspace`][@stdlib/iter/unitspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns numbers incremented by one.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-linspace.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-linspace

[test-image]: https://github.com/stdlib-js/iter-linspace/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-linspace/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-linspace/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-linspace?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-linspace.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-linspace/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-linspace/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-linspace/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-linspace/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-linspace/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-linspace/main/LICENSE

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn/tree/esm

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array-from-iterator/tree/esm

[@stdlib/iter/datespace]: https://github.com/stdlib-js/iter-datespace/tree/esm

[@stdlib/iter/incrspace]: https://github.com/stdlib-js/iter-incrspace/tree/esm

[@stdlib/iter/logspace]: https://github.com/stdlib-js/iter-logspace/tree/esm

[@stdlib/iter/step]: https://github.com/stdlib-js/iter-step/tree/esm

[@stdlib/iter/unitspace]: https://github.com/stdlib-js/iter-unitspace/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
