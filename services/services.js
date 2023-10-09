

export function changePage(pageToLoad) {
    
    if (pageToLoad != "")
    {
        $.get(`pages/${pageToLoad}.html`, function (data) {
            $("#page").html(data);
        });
    }
    else
    {
        $.get(`pages/home.html`, function (data) {
            $("#page").html(data);
        });
    }
}