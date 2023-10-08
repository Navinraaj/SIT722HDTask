
describe("flixtube front end", () => {

    it("can list videos", () => {

        // Load the fixture named "two-videos" into the database "metadata".
        cy.loadFixture("metadata", "two-videos");
        
        // Visit the web page.
        cy.visit("/");

        // Check that we have two items in the video list.
        cy.get("#video-list").find("div").should("have.length", 2);

        cy.get("#video-list div:nth-child(1) a") // Check the first item in the video list.
            .should("have.text", "SampleVideo_1280x720_1mb.mp4") // Make sure file name is correct.
            .should("have.attr", "href", "/video?id=5ea234a1c34230004592eb32"); // Make sure link is correct.

        cy.get("#video-list div:nth-child(2) a") // Check the second item in the video list.
            .should("have.text", "Another video.mp4") // Make sure file name is correct.
            .should("have.attr", "href", "/video?id=5ea234a5c34230004592eb33"); // Make sure link is correct.
    });
    it("can play a video", () => {
        cy.visit("/video?id=5ea234a5c34230004592eb33");
        cy.get('video') // Assuming the video tag is used for the video player
            .then(($video) => {
                $video[0].play(); // Play the video
            })
            .should('have.prop', 'paused', false); // Assert that the video is not paused
    });
    

    it("can pause a video", () => {
        cy.visit("/video?id=5ea234a5c34230004592eb33");
        cy.get("#video") // Replace with the actual selector for your video player
            .trigger('pause') // Trigger pause event on the video player
            .should('have.prop', 'paused', true); // Assert that the video is paused
    });



});