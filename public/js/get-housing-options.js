const url = "http://localhost:2019/housing-options";
const success = data => {
    // Process data here
    document.getElementById("housing-options").innerHTML = data;
};

/**
 * GET HOUSING OPTIONS
 */
$.get({ url, success });
