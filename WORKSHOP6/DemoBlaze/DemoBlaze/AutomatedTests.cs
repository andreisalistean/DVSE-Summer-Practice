using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using Xunit;

namespace DemoBlaze
{
    public class AutomatedTests
    {
        private IWebDriver driver;

        //[Fact]
        public void StartTest()
        {
            driver = new ChromeDriver();
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.demoblaze.com");

            //Assert.Equal("STORE", driver.Title);       
        }

        public void Dispose()
        {
            driver.Quit();
        }

        [Fact]
        public void FirstTest()
        {
            StartTest();
            Assert.Contains("STORE", driver.Title);
            Dispose();
        }

        [Fact]
        public async void LoggingOutTest()
        {
            StartTest();

            WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(5));
            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.Id("login2")));
            IWebElement loginlink = driver.FindElement(By.Id("login2"));
            loginlink.Click();
            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.XPath("//button[@onclick='logIn()']")));
            IWebElement loginInput = driver.FindElement(By.Id("loginusername"));
            IWebElement passwordInput=driver.FindElement(By.Id("loginpassword"));
            IWebElement loginBtn = driver.FindElement(By.XPath("//button[@onclick='logIn()']"));

            loginInput.SendKeys("test2001");
            passwordInput.SendKeys("anaaremere");
            loginBtn.Click();


            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.Id("logout2")));
            IWebElement loginConfirmation =driver.FindElement(By.Id("nameofuser"));
            Assert.Equal("Welcome test2001",loginConfirmation.Text );

            IWebElement logoutlink = driver.FindElement(By.Id("logout2"));
            logoutlink.Click();

            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.Id("login2")));
            Assert.True(driver.FindElement(By.Id("signin2")).Displayed);


            driver.Quit();
        }

        [Fact]
        public void OrderMonitorTest()
        {
            StartTest();

            WebDriverWait wait=new WebDriverWait(driver, TimeSpan.FromSeconds(5));

            IWebElement monitorsLink = driver.FindElement(By.XPath("//a[contains(@onclick,'monitor')]"));
            monitorsLink.Click();

            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath("//img[contains(@src,'apple_cinema')]")));

            IWebElement appleLink = driver.FindElement(By.XPath("//div[contains(@class,'card')]//descendant::h5[text()='$400']/preceding::h4/a"));
            appleLink.Click();
            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.XPath("//a[@onclick='addToCart(10)']")));
            IWebElement addToCart = driver.FindElement(By.XPath("//a[@onclick='addToCart(10)']"));
            addToCart.Click();

            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.AlertIsPresent());
            IAlert alert = driver.SwitchTo().Alert();

            string alertMsg=alert.Text;

            Assert.Equal("Product added", alertMsg);
            alert.Accept();

            string monitorName = driver.FindElement(By.XPath("//h2[@class='name']")).Text;
            string monitorPrice = driver.FindElement(By.XPath("//h3[@class='price-container']")).Text;
            //
            IWebElement carlink = driver.FindElement(By.Id("cartur"));
            carlink.Click();

            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementIsVisible(By.ClassName("success")));
            //tr[@class='succes'][1]/td(2)

            string monitorNameCart = driver.FindElement(By.XPath("//tr[@class='success'][1]/td[2]")).Text;
            string monitorPriceCart = driver.FindElement(By.XPath("//tr[@class='success'][1]/td[3]")).Text;

            Assert.Equal(monitorName, monitorNameCart);
            //Assert.Equal("400", monitorPriceCart);

            //continuam cu order si toate cele

            Dispose();
        }
    }
}