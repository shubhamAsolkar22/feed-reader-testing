/* this is a spec file where all test suites and specs are defined */
$(function () {
    describe('RSS Feeds', function () {
        /* tests to make sure 
         * that the allFeeds variable has been defined 
         * and that it is not empty
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should have url defined for all feeds', function () {
            let url_undefined_or_empty = false;
            for (feed of allFeeds) {
                if (feed.url === "" || feed.url === undefined) {
                    url_undefined_or_empty = true;
                    break;
                }
            }
            expect(url_undefined_or_empty).toBe(false);
        });
        /* test that loops through each feed in the allFeeds object 
         * and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have name defined for all feeds', function () {
            let name_undefined_or_empty = false;
            for (feed of allFeeds) {
                if (feed.name === "" || feed.name === undefined) {
                    name_undefined_or_empty = true;
                    break;
                }
            }
            expect(name_undefined_or_empty).toBe(false);
        });
        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });


    describe('The menu', function () {

        it('should be hidden by default', function () {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
        /* test that ensures the menu element is
         * hidden by default.
         */
        it('displays when clicked and hides when clicked again', function () {
            document.querySelector(".menu-icon-link").click();
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(false);
            document.querySelector(".menu-icon-link").click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
        /* test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: the menu display when
         * clicked and does it hide when clicked again.
         */
    });


    describe('Intitial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('should load atleast one .entry element within .feed container when loadFeed is called', function (/* done */) {
            const feedContainer = document.querySelector(".feed");
            expect(feedContainer.querySelector('.entry')).not.toBe(null);
            /* done(); */
        });

        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        describe('New Feed Selection', function () {
            let initialFeeds, finalFeeds;
            beforeEach(function (done) {
                const initialFeeds = [];
                const t = document.querySelectorAll('.feed .entry')
                //get text content of all initial feeds
                for (i of t) {
                    initialFeeds.push(i.textContent);
                }

                loadFeed(1, done);

            });
            it("contents change when a new feed is loaded by the loadFeed function", function (/* done */) {
                const finalFeeds = [];
                const t = document.querySelectorAll('.feed .entry')
                //get text content of all initial feeds
                for (i of t) {
                    finalFeeds.push(i.textContent);
                }

                expect(initialFeeds).not.toEqual(finalFeeds);
                /* done(); */
            });
            /* test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             */
        });

    });


}());
