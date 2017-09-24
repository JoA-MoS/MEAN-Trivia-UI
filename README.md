# ProjectProductManagementUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Server Setup

### Install Dependencies
1. Install node/npm:
    ```
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y build-essential
    sudo apt-get install -y npm
    ```
2. Install yarn:
    ```
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
    sudo apt-get update && sudo apt-get install yarn
    ```
3. Install angular-cli:
    ```
    npm install -g @angular/cli
    ``` 
    _if this loops press ctr-c and then run the command again if it loops again then just continue things should be fine_
    a. configure angular-cli to use yarn globally:
        ```
        ng set --global packageManager=yarn`
        ```
#### Other requirement probably needed but not documented here
1. NGINX
2. MongoDB

## Install Application
1. Navigate to the /var/www/ then git clone your repo
    ```
    git clone {{git url}} {{Optional Folder to clone into}}
    ```
2. cd into your directory
3. Install Packages
    ```
    yarn install
    ```
4. Build your angular application specifying the base url you want to use (if it is at the root of your server you do not need to specify a base ref)
    ```
    ng build --prod --base-href {{/path/from/root/of/server/}}
    ```
## configure nginx for angular application
1. open the configuration
    ```
    sudo vim /etc/nginx/sites-available/default
    ```
2. Add a location entry for you Angular Aplication (press i to edit the file)
    ```
    location {{/path/user/sees/}} {
        alias {{/physical/path/to/application}}/dist/;
        try_files $uri$args $uri$args/ {{/path/user/sees/}}index.html;
    }
    ```
    Save and close (press esc then : then x and press enter)
3. reload nginx
    ```
    sudo nginx -s reload
    ```
4. navigate to the url and you should be able to see your angular application

## configure nginx for nodejs API server
1. open the configuration
    ```
    sudo vim /etc/nginx/sites-available/default
    ```
2. Add a location entry for you Angular Aplication (press i to edit the file)
    ```
     location /portfolio/mean/ppm-api/ {
            rewrite ^/portfolio/mean/ppm-api/(.*)$ /$1 break; # <- needed if you are hosting under another directory unless your app somehow figures this out
            proxy_pass http://localhost:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
    }

    ```
    Save and close (press esc then : then x and press enter)
    _The above entry is important if you are hosting your api for access outside your server or if your ui is on a different server than your api._
3. reload nginx
    ```
    sudo nginx -s reload
    ```

## Set up PM2 for nodejs api server
1. Install PM2
    ```
    sudo npm install -g pm2
    ```
2. Start you application with pm2
    ```
    pm2 start index.js --name "{{Descriptive Name}}"
    ```
3. run the following command to help generate another command for you to run
    ```
    pm2 startup systemd
    ```
    it will output something link:
    ```
    [PM2] Init System found: systemd
    [PM2] You have to run this command as root. Execute the following command:
    sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u sammy --hp /home/sammy
    ```
4. copy the command and enter it into your console

5. check status
pm2 logs ppm-api [--lines 1000]`

## Install MongoDB and run as service

1. create a new file to run mongodb as a service on startup
    ```
    sudo vim /etc/systemd/system/mongodb.service
    ```
2. Paste the following into the file save and exit
    ```
    [Unit]
    Description=High-performance, schema-free document-oriented database
    After=network.target

    [Service]
    User=mongodb
    ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

    [Install]
    WantedBy=multi-user.target
    ```
3. Start the service
    ```
    sudo systemctl start mongodb
    ```
4. Check the status
    ```
    sudo systemctl status mongodb
    ```
5. If all looks good enable mongodb to start on startup
    ```
    sudo systemctl enable mongodb
    ```



#### Sources
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
https://yarnpkg.com/lang/en/docs/install/#linux-tab
https://medium.com/@CristianSitov/delivering-multiple-angular2-apps-with-a-single-nginx-server-at-different-urls-55b42ca4c4ce
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04
https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04
