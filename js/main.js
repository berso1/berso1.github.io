
function getInfo(){
    //var $TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjUwNjU3MWQ0LWUxNDUtNGRiNS1iMTg4LTMyZDFjNTI3Y2I4NiIsImlhdCI6MTUzNDU1MTM2Nywic3ViIjoiZGV2ZWxvcGVyLzFlNzdiNzhlLTVlMDYtOTdjYS01YjIwLTJlZDExNTJkZjliNSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDguMjA0Ljg3LjE4MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.O5BfLkkT6SJJHncuGxEkNUq8NyzpnoADHY3d3QoDdX4iVy4Lpn2K7PW5Oli2BUs9WnCKXnGEGq82kmAFXXbkRg";
    
    var $cards = $('cards');
    $.ajax({
       url:'https://api.clashroyale.com/v1/cards',
       type:'GET',
       origin: '108.204.87.183',
       headers:{ "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjUwNjU3MWQ0LWUxNDUtNGRiNS1iMTg4LTMyZDFjNTI3Y2I4NiIsImlhdCI6MTUzNDU1MTM2Nywic3ViIjoiZGV2ZWxvcGVyLzFlNzdiNzhlLTVlMDYtOTdjYS01YjIwLTJlZDExNTJkZjliNSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDguMjA0Ljg3LjE4MyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.O5BfLkkT6SJJHncuGxEkNUq8NyzpnoADHY3d3QoDdX4iVy4Lpn2K7PW5Oli2BUs9WnCKXnGEGq82kmAFXXbkRg'},
       error : function(err) {
            console.log('Error!', err)
       }, 
       success: function(cards){
           $.each(cards,function(i,card){
            $cards.append('<li> card </li>');
           })
       } 

       


    });
    console.log("HeY!!!");
}