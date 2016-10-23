describe('IP Login sceanrio', function() {
	
	
  it('User Should able to login', function() {
	  
    browser.get('https://website-investmentplannerwebeunqa.azurewebsites.net/Login');
    
    browser.manage().window().maximize();

    element(by.model('groupName')).sendKeys('sp26 test');
    
    element(by.model('userName')).sendKeys('test1');
    
    element(by.model('password')).sendKeys('fedby123');
    
    element(by.className('btn btn-lg btn-primary ng-isolate-scope')).click();  
  
    
  });

  
  it('validate Client List Page', function() {
	  
     var greeting = element(by.className('page-header'));

     expect(greeting.getText()).toEqual('Clients');
	    
	 element(by.xpath('//p')).getText().then(function(text){
	    
	 console.log(text);
	  
	 })
  });
	  
  
  it('Validate Search Client', function() {
	  
	element(by.model('search')).sendKeys('Jey');
	
	element(by.xpath("//tbody/tr/td[.='Jey']")).click();
	
	element(by.xpath("//a[.='Client Details']")).click();
	
	element(by.xpath("//span[@ng-show='client.clientId']")).getText().then(function(text){
	    
	console.log(text);
		  
     })
	
 });
  

  it('Validate Edit Client', function() {
	
	element(by.xpath("//span[.='Edit Client']")).click();
	
	element(by.model('client.details.firstName')).clear();
	
	element(by.xpath("//span[@class='help-block']")).getText().then(function(text){
	    
	console.log(text);
			  
	 })
	
	element(by.xpath("//span[.='Cancel']")).click();
		
    var firstName = element(by.xpath("//span[@ng-bind='client.details.firstName']"));

    expect(firstName.getText()).toEqual('Jey');
			  		
    element(by.xpath("//span[.='All Clients']")).click();
    
    element(by.className('page-header')).isDisplayed();
    
  });
    
  it('Validate Logout IP', function() {
    	
    element(by.xpath("//a[@title='Logout']")).click();
    
    element(by.className('btn btn-lg btn-primary ng-isolate-scope')).isDisplayed();
    	 	
  });
    
    
});
	

