

$(document).ready(function() {
    var amount = 0;
    var cartAmount = 0;
    const slider = document.getElementById('slider');


    $('#rSliderButton').on('click', function() {
        slider.scrollLeft += 350;
    });

    $('#lSliderButton').on('click', function() {
        slider.scrollLeft += -350;
    });

    $('#add').on('click', function() {
        amount++;
        $('#amount').text(amount);
    });

    $('#minus').on('click', function() {
        if (amount > 0) {
            amount--;
            $('#amount').text(amount);
        }
    });

    $('#addCart').on('click', function() {
        cartAmount += amount;
        $('#cartAmount').text(cartAmount);
        amount = 0;
        $('#amount').text(amount);
        console.log(cartAmount)

        if(cartAmount > 0){
            $("#emptyCartText").addClass("hidden");
            $("#cartItemsDetailWrapper").removeClass("hidden");
            $("#cartItemAmount").text(cartAmount);

            $("#cartAmount").text(cartAmount);
            $("#cartAmount").removeClass("hidden");

            const total = cartAmount * 125.00;

            $("#total").text(`$${total.toFixed(2)}`);
        }
    });

    $("#cart").on('click', function() {
        $("#userCart").toggle("hidden")
        $("#userCart").css("display", "flex")
    });

    $("#deleteButton").on('click', function() {
        cartAmount = 0;
        $('#cartAmount').text(cartAmount);
        $("#cartItemsDetailWrapper").addClass("hidden");
        $("#emptyCartText").removeClass("hidden");

        $("#cartAmount").addClass("hidden");

    });

    $("#thumbnail1").on('click', function() {
        $(".thumbnail").each(function() {
            $(this).removeClass("border-[2px] border-[#FF7E1B] opacity-[75%]");
        });

        $(this).addClass("border-[2px] border-[#FF7E1B] opacity-[75%]");
        $("#slider").scrollLeft(0)
    });

    $("#thumbnail2").on('click', function() {
        $(".thumbnail").each(function() {
            $(this).removeClass("border-[2px] border-[#FF7E1B] opacity-[75%]");
        });

        $(this).addClass("border-[2px] border-[#FF7E1B] opacity-[75%]");
        $("#slider").scrollLeft(500)
    });

    $("#thumbnail3").on('click', function() {
        $(".thumbnail").each(function() {
            $(this).removeClass("border-[2px] border-[#FF7E1B] opacity-[75%]");
        });

        $(this).addClass("border-[2px] border-[#FF7E1B] opacity-[75%]");
        $("#slider").scrollLeft(1000)
    });

    $("#thumbnail4").on('click', function() {
        $(".thumbnail").each(function() {
            $(this).removeClass("border-[2px] border-[#FF7E1B] opacity-[75%]");
        });

        $(this).addClass("border-[2px] border-[#FF7E1B] opacity-[75%]");

        $("#slider").scrollLeft(1500)
    });

    $("#mobileMenu").on('click', function() {
        $("#mobileNav").toggle("hidden")
    });

    $("#closeMobileNav").on('click', function() {
        $("#mobileNav").toggle("hidden")
    });
});