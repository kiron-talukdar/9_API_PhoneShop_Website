
// 1.load api data
const loadPhone = async (searchText=10) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;

    // 3.call the function
    displayPhone(phones)
}

//2 create a funtion to display phone data
const displayPhone = (phones) => {

    // 4 get the elementbyId, create a element, add phone information and append
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent=''; // clear phone container cards before adding new cards    

    //  8 display showAll button if phonelength is 10+
    const showAllButton=document.getElementById('show-all-button');
    if(phones.length>10){
        showAllButton.classList.remove('hidden');
    }else{
        showAllButton.classList.add('hidden')
    }

    //7 show only first 10 phone
    phones=phones.slice(0,10);


    // 5 create a foreach loop to show all phone
    phones.forEach(phones => {
        // console.log(phones);

        const phoneCart = document.createElement('div');
        phoneCart.classList = `card bg-base-100 w-96 shadow-xl`

        phoneCart.innerHTML = ` 
        <figure>
            <img
            src="${phones.image}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${phones.brand}</h2>
            <p>${phones?.phone_name}</p>
            <div class="card-actions justify-end">
            <button onClick="showSingleDetail('${phones.slug}')" class="btn btn-primary">Show Details</button>  
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCart);

    });
    
    toggleloadingSpinner(false)    //9.2 hide loading spinner
}

// 6. handle search button
const handleSearch = () => {
    const searchValue=document.getElementById('search-value');
    const searchInput=searchValue.value;
    searchValue.value='';
    // console.log(searchInput);

    toggleloadingSpinner(true);  //9.1 show loading spinner
    loadPhone(searchInput);
}

// 9. loading spinner

    const toggleloadingSpinner=(idLoading)=>{
        const loadingSpinner=document.getElementById('loading-spinner')
        if(idLoading){
            loadingSpinner.classList.remove('hidden')
        }else{
            loadingSpinner.classList.add('hidden')
        }
    }

// 10 show details of single item

const showSingleDetail= async(id) =>{
    // console.log(id)
    const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data=await res.json();
    // console.log(data)
    const phone=data.data;
    
    showPhoneDetails(phone); //11.1
}
// 11. show phone details modals

const showPhoneDetails=(phone)=>{
     console.log("single is",phone)
     const showDetialsContainer=document.getElementById('show-details-container')

     showDetialsContainer.innerHTML=`

        <img src="${phone.image}"alt="phone" />
        <h2 class="card-title">${phone?.brand}</h2>
         <p>${phone?.name}</p>
        <p>${phone?.releaseDate}</p>
        <p>${phone?.mainFeatures?.displaySize}</p>
        <p>${phone?.mainFeatures?.storage}</p>
        <p>${phone.others?.GEP || "No Gps Available"}</p>
     `

     show_details_modal.showModal()
}

loadPhone()
 