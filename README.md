# tableFilter

A filter search for tables

## Example

```code
1. Simple JavaScript

tableFilter(searchElement, tableElement);

1.1. With Parameter

tableFilter('#search', '#table');

2. JavaScript - Module Pattern

tableFilter(searchElement, tableElement);

2.1. With Parameter

filter.table('#search', '#table');
```

### Structure of Source Code

```html
<!-- 1. Choice -->

<table id="table">
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>E-Mail Address</th>
        <th>Birthday</th>
    </tr>   
    <tr>
        <td>Adam</td>
        <td>Mueller</td>
        <td>adam.mueller@live.com</td>
        <td>21-01-1980</td>
    </tr>
    <tr>
        <td>Mary</td>
        <td>White</td>
        <td>m-white@icloud.com</td>
        <td>11-04-1978</td>
    </tr>
    <tr>
        <td>Nils</td>
        <td>Bren</td>
        <td>master.bren@yahoo.com</td>
        <td>30-09-1993</td>
    </tr>
</table>

<!-- 2. Choice -->

<table id="table">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-Mail Address</th>
            <th>Birthday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Adam</td>
            <td>Mueller</td>
            <td>adam.mueller@live.com</td>
            <td>21-01-1980</td>
        </tr>
        <tr>
            <td>Mary</td>
            <td>White</td>
            <td>m-white@icloud.com</td>
            <td>11-04-1978</td>
        </tr>
        <tr>
            <td>Nils</td>
            <td>Bren</td>
            <td>master.bren@yahoo.com</td>
            <td>30-09-1993</td>
        </tr>
    </tbody>
</table>
````