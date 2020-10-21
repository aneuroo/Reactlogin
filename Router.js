const bcrypt = require('bcrypt');

class Router
{
	constructor(app, db)
	{
		this.login(app, db);
		this.logout(app, db);
		this.isLoggedIn(app, db);
		this.logindata(app, db);
		this.delete(app, db);
		this.addnote(app, db);
	}

	login(app, db)
	{
		app.post('/login', (req, res) =>
		{
			let username = req.body.username;
			let password = req.body.password;

			username = username.toLowerCase();

			if(username.length > 12 || password.length > 12)
			{
				res.json({
					success: false, 
					msg:'An Error occured' 
				})
				return;
			}


			let cols = [username];

			db.query('SELECT * FROM users WHERE username = ? LIMIT 1', cols,(err, data , fields ) =>
			{
				if(err)
				{
				res.json({
					success: false, 
					msg: 'An Error occured' 
				})
				return;
				}

				if(data && data.length === 1 )
				{ 
					bcrypt.compare(password, data[0].password, (bcryptErr, verified) =>
					{

			/////////////////////
						if(verified)
						{
							req.session.userID = data[0].id;
							req.session.username = data[0].username;
							res.json({
							success: true, 
							username: data[0].username
							})
							return;
						}
						else
						{
							res.json({
							success: false,
							msg: 'Incorrect Password'
							})
						}
			//////////////////////////////
					});
				}
				else
				{

					res.json({
					success: false, 
					msg: 'User Not Found'
					})
				return;
				}
			});




		});
	}

	logindata(app, db)
	{
			app.get('/logindata', (req, res) =>
			{

			let cols =[req.session.username];


			db.query('SELECT * FROM userdata WHERE user = ? ', cols,(err, results , fields ) =>
			{
				if(err)
				{
					console.log(err);
					return res.err;
				}
				else
				{
					//console.log("Success" , results);
					res.json(
					results
					)
					
				}
			});

		});
	}

	delete(app, db)
	{
		
		app.post('/delete', (req, res) =>
		{
			
			let diaryid = req.body.diaryid;

			let uid = [diaryid];
			console.log(uid);

			var strSQL = 'DELETE FROM userdata WHERE id = '+ uid;
			console.log(strSQL);
			db.query('DELETE FROM `userdata` WHERE `userdata`.`id` = ? LIMIT 1', uid,(err, data , fields ) =>
			{
				if(err)
				{
					console.log(err)
					res.json({
					success: false, 
					msg: 'An Error occured' 
				})
				return;
				}
				else
				{
					console.log("Success" , data);
					res.json(
					data
					)
				}
			});

		});
	}

	addnote(app, db)
	{
		app.post('/addnote', (req, res) =>
		{
		
			console.log("In Add note")
			let diarynote = req.body.diarynote;
			let username = req.body.username;


			db.query("INSERT INTO `userdata` (user, note) VALUES ('"+username+"', '" +diarynote+"')",(err, data , fields ) =>
			{
				if(err)
				{
					console.log(err)
					res.json({
					success: false, 
					msg: 'An Error occured' 
				})
				return;
				}
				else
				{
					console.log("Success" , data);
					res.json(
					data
					)
				}
			});

		});
		
	}



	logout(app, db)
	{

		app.post('/logout', (req, res) =>
		{
			if(req.session.userID)
			{
				req.session.destroy();
				res.json({
				success: true
	
				})
				return true;
			}
			else
			{
				res.json({
				success: false
				})
				return false;	
			}
		});
		
	}



	isLoggedIn(app, db)
	{

		app.post('/isLoggedIn', (req, res) =>
		{
			if(req.session.userID)
			{
				let cols =[req.session.userID];
				
				db.query('SELECT * FROM users WHERE id = ? LIMIT 1', cols,(err, data , fields ) =>
				{
					if(data && data.length === 1 )
					{ 
						res.json({
						success: true,
						username: data[0].username
						})
						return true;
					}
					else
					{
						res.json({
						success: false
						})
					}

				});



			}
			else
			{
				res.json({
				success: false
				})
			}


		});
	}



}

module.exports = Router;

