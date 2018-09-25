<?php
get_header();
$ch = curl_init('https://api.clashroyale.com/v1/cards');
$TOKEN="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ4YWZjMDUzLWNmZmQtNDJiNC1iZWU5LWNkNWI5ZGY3ZmM2MSIsImlhdCI6MTUzNjcwODE0OCwic3ViIjoiZGV2ZWxvcGVyLzFlNzdiNzhlLTVlMDYtOTdjYS01YjIwLTJlZDExNTJkZjliNSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1NC42Ny4zMS4xNjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.qUUNYpjl3tG7UfcUn2iz_pDrGngpw8Suo2yXLFR6kUpFoZ9OdBoq1cCATUS_yq4PCT0-I2ucnsZC9JOZOiJitA";
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json',
    'Authorization: Bearer ' . $TOKEN
    ));
$data = curl_exec($ch);
$info = curl_getinfo($ch);
$json = json_decode($data,true);

?>
<script>  
function showName(name){
  console.log("showName :"+name);
  alert(name);
}       
</script>
<div id="board">
<?php 
$cardNum = 0;
foreach($json['items'] as $member){
   $cardNum++; 
?>  
    <div class="back">
          <img src="<?php echo $member['iconUrls']['medium']; ?>" 
           onclick="showName('<?php echo $member['name'];?>')" />
    </div> 
<?php
}//foreach
?> </div>

<?php
curl_close($ch);
get_footer();
?>