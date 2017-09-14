---
category: Components
type: Data Entry
title: ImagePicker
---

Note: Just for selecting picture. Generally `ImagePicker` is used to select picture before uploading, but without the feature of uploading.


## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| files    | Picture files array which includes `url`(required) in each object | Array  | []  |
| onChange    |   Callback is called when the value of `files` is changed. The `operationType` is one of `add` or `remove`(the third argument is the removed index).| (files: Object, operationType: string, index: number): void |   |
| onImageClick(`web only`)    | Callback is called when the user clicks the selected picture | (index: number, files: Object): void |   |
| onAddImageClick(`web only`) | Callback is called when the selector button is clicked   | (): void |   |
| selectable(`web only`) | whether to show selector button  | boolean |  true |

> Note: Only return assets-library type for RN, if you want to upload files, see https://github.com/facebook/react-native/issues/201
