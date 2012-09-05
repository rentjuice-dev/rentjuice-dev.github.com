RentJuice.com (Public Site)
=============

This repo contains the [RentJuice.com](http://rentjuice.com) static html files. 
It is compiled using [Jekyll](https://github.com/mojombo/jekyll)

Getting Started
-------

There are two paths you may take:

1. Editing pages through Github (Marketing, Product or Design Team)
2. Manually building the Jekyll site (Product or Design Team)



  1. Editing Pages through Github
  ------------

	1. Visit the page you want to edit on [https://github.com/rentjuice/rentjuice.github.com](https://github.com/rentjuice/rentjuice.github.com) (e.g. `index.html` or `market.html`)
	2. Click **"Edit this file"** or **"Fork and edit this file"**
	3. Edit the file
	4. Enter a commit message and save the file by clicking **"Propose File Change"**
	5. Get an admin to review your change and push it live
	6. Observe [RentJuice.com](http://rentjuice.github.com) to make sure your changes were successful


	If you're curious about what's going on behind the scenes, check out:
	[Github Pages for Jekyll Layouts](http://help.github.com/pages/#using_jekyll_for_complex_layouts)



  2. Building the site locally
  ------------

	1. Follow the [Jekyll Install Guide](https://github.com/mojombo/jekyll/wiki/install)
	2. Clone the repo `git clone git@github.com:rentjuice/rentjuice.github.com.git rentjuice_public`
	3. Configure hosts / virtualhosts


		`/etc/hosts`

		```
		127.0.0.1 public.rentjuice.local
		```

		`/etc/apache2/httpd.conf`

		```htaccess
			<VirtualHost *:80>
			   ServerName public.rentjuice.local
			   DocumentRoot "/var/www/rentjuice_public/_site"
			</VirtualHost>
		```

	4. Restart Apache `/etc/init.d/apache2 restart` or `service apache2 restart`
	5. Run `jekyll /var/www/rentjuice_public`
	6. Visit [http://public.rentjuice.local](http://public.rentjuice.local)
	7. Make changes to any files except what's in the `_site` directory 


		Any saves you make to files in `/var/www/rentjuice_public` will automatically reload in `/var/www/rentjuice_public/_site`


	8. Push your changes and make a [pull request](https://github.com/rentjuice/rentjuice.github.com/pull/new)
	9. Observe [RentJuice.com](http://rentjuice.github.com) to make sure your changes were successful


	
	If you're having issues with visiting the clean url version of pages (e.g. `market` vs `market.html`), you'll need to manually add an `.htaccess` file to the root of `rentjuice_public`
	
	
	`.htaccess`
	
	```htaccess
	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME}.html -f
	RewriteRule ^.+$ %{REQUEST_FILENAME}.html [L]
	```
	
	

