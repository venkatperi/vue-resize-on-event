// Copyright 2017, Venkat Peri.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

export function resizeTextArea(element: HTMLTextAreaElement) {
  const cs = getComputedStyle(element)
  let offset = 0

  element.style.height = "0";

  switch (cs.boxSizing) {
    case "border-box":
      offset = element.offsetHeight;
      break;
    case "content-box":
      offset = -element.clientHeight + parseFloat(cs.minHeight || '0');
      break;
  }

  element.style.height = `${element.scrollHeight + offset}px`;
}

function resizeInput(element: HTMLInputElement) {
  const cs = getComputedStyle(element)
  let offset = 0

  // First test that it is actually visible, otherwise all measurements are off
  element.style.width = "1000px";

  // Element is invisible, just set to something reasonable
  if (!element.offsetWidth) {
    element.style.width = `${element.value.length}1ch`;
    return
  }

  element.style.width = "0";

  switch (cs.boxSizing) {
    case "border-box":
      offset = element.offsetWidth;
      break;
    case "padding-box":
      offset = element.clientWidth;
      break;
    case "content-box":
      offset = parseFloat(cs.minWidth || '0');
      break;
  }

  let width = Math.max(offset, element.scrollWidth - element.clientWidth)

  element.style.width = `${width}px`;

  // To bulletproof, we will set scrollLeft to a
  // huge number, and read that back to see what it was clipped to
  // and increment width by that much, iteratively

  for (let i = 0; i < 10; i++) {
    element.scrollLeft = 1e+10;

    if (element.scrollLeft == 0) {
      break;
    }

    width += element.scrollLeft;
    element.style.width = `${width}px`;
  }
}

/**
 * Adjust the height of the given element to the element's scrollHeight
 *
 * @param e
 */
export function resize(e: Event | HTMLElement): void {
  let el = e instanceof Event ? e.target : e

  if (el instanceof HTMLTextAreaElement) {
    return resizeTextArea(el)
  }

  if (el instanceof HTMLInputElement) {
    return resizeInput(el)
  }
}
