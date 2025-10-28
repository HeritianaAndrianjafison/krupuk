// Simple interactive behaviors: newsletter, contact form, quick view, cart simulation
document.getElementById('year').textContent = new Date().getFullYear();

// Newsletter
document.getElementById('newsletter').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  alert('Merci ! Un code de -10% a été envoyé à ' + email);
  e.target.reset();
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Merci pour votre message — nous vous répondrons bientôt !');
  e.target.reset();
});

// Quick view modal
function openQuickView(product){
  const modal = document.getElementById('quickView');
  const content = document.getElementById('quickContent');
  content.innerHTML = '<h2>' + product + '</h2><p>Délicieux krupuk typique, idéal pour partager.</p><p><strong>Prix indicatif :</strong> Voir la fiche produit.</p><div style="margin-top:12px"><button class="btn-primary" onclick="addToCart(\''+product+'\')">Ajouter au panier</button> <button class="btn-outline" onclick="closeQuickView()">Fermer</button></div>';
  modal.setAttribute('aria-hidden','false');
}
function closeQuickView(){
  const modal = document.getElementById('quickView');
  modal.setAttribute('aria-hidden','true');
}

// Simple cart (local)
function addToCart(product){
  alert(product + ' ajouté au panier (simulation).');
  closeQuickView();
}

// Attach "Add to cart" buttons
document.querySelectorAll('[data-product]').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const p = btn.getAttribute('data-product');
    addToCart(p);
  })
})
