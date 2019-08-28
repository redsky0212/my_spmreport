$(document).ready(function(){
 $('.tabmenu#tabmenu_type').tabMenu(3);

 $(".selectbox").click(function() {
  $(this).find("div.mask_box").toggle();
 });
 $(".selectbox ul li").click(function() {
  var allOptions = $(this).parent().children("li");

  allOptions.children("a").removeClass("on");
  $(this).children("a").addClass("on");
  $(this).closest(".selectbox").find("p").html($(this).children("a").html());
 });


 $(".sel_02").click(function() {
  $(this).find("div.mask_box2").toggle();
 });
 $(".sel_02 ul li").click(function() {
  var allOptions2 = $(this).parent().children("li");

  allOptions2.children("a").removeClass("on");
  $(this).children("a").addClass("on");
  $(this).closest(".sel_02").find("p").html($(this).children("a").html());
 });


 $(".sel_03").click(function() {
  $(this).find("div.mask_box3").toggle();
 });
 $(".sel_03 ul li").click(function() {
  var allOptions2 = $(this).parent().children("li");

  allOptions2.children("a").removeClass("on");
  $(this).children("a").addClass("on");
  $(this).closest(".sel_03").find("p").html($(this).children("a").html());
 });


 $(document).mouseup(function(e) {
  var container = $(".selectbox");
  if(container.has(e.target).length === 0) {
   $("div.mask_box").hide();
  }
 });

 $(window).scroll(function() {
  var $el = $('#btn_top');

  if($(this).scrollTop() >= 10) $el.show(400);
  else $el.hide(400);
 });

 var date = new Date();
    var year  = parseInt(date.getFullYear()) + 1;
    setCalendar("depositDate", "1990:"+ year, year + "1231");
});

function setCalendar( strElemId, strYearRange, strMaxDate){
    /**
     * jQuery UI Widgets - Datepicker
     *
     * changeYear: 년도 선택여부
     * changeMonth: 월 선택여부
     * monthNamesShort: 월 선택박스 텍스트
     * showButtonPanel: 오늘버튼과 닫기버튼 선택여부
     * currentText: 오늘 텍스트
     * closeText: 닫기 텍스트
     * dayNamesMin: 요일별 텍스트
     * monthNames: 월별 텍스트
     * prevText: 이전달 텍스트
     * nextText: 다음달 텍스트
     * dateFormat: 달력 선택 이후 출력할 텍스트 유형 (EX. 2009-01-01)
     * showOn: datepicker 디자인 유형 (EX. focus 또는 button)
     * buttonImage: showOn 옵션을 button 설정시 사용될 이미지
     * buttonImageOnly: 버튼 이미지만 보여줄 것인지 선택여부
     * buttonText: 버튼 이미지 툴팁
     * yearRange: 선택 연도 범위 (EX. 1997:2010)
     * maxDate: 선택가능한 최대일자
     *
     * strYearRange : 선택 연도 범위 (EX. 1997:2010)
     * maxDate : 선택가능한 최대일자 (EX. 20101020)
     */
    var yearMaxDate = strMaxDate.substring(0, 4);
    var monthMaxDate = strMaxDate.substring(5, 7);
    var dayMaxDate = strMaxDate.substring(8, 10);

    var  jqCalendar = {
      changeYear: true,
      changeMonth: true,
      monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      //showButtonPanel: true,
      //currentText: "오늘",
      //closeText: "닫기",
      dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
      monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      prevText: "이전달",
      nextText: "다음달",
      dateFormat: "yy.mm.dd",
      buttonImageOnly: true,
      buttonText: "",
      yearRange: strYearRange,
      maxDate: new Date(yearMaxDate, monthMaxDate - 1, dayMaxDate)
    };

    $("#daily_start_date").datepicker(jqCalendar);
    $("#daily_end_date").datepicker(jqCalendar);
}

/* tabmenu */
$.fn.tabMenu = function(num) {
 var hook = $(this).find('a');
 var firstNum = (num) ? num : 0;
 var locationNum = firstNum;

 $.each(hook, function(i) {
  if(hook.eq(i).attr('href').replace('#', '').length > 0 && i != firstNum) {
   $(hook.eq(i).attr('href')).hide();
  }
  hook.eq(firstNum).addClass('on');
 });

 hook.click(function(){
  var objThisNum = hook.index(this);

  if (hook.attr('href').replace('#', '').length > 0) {
   $.each(hook, function(i) {
    $(hook.eq(i).attr('href')).hide();
    $(this).removeClass('on');
   });
  }
  $(hook.eq(objThisNum).attr('href')).show();
  hook.eq(objThisNum).addClass('on');

  locationNum = objThisNum;
  $(".tab_title").html($(this).html());
  return false;
 });
};
