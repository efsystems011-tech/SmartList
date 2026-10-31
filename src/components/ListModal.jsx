import { useState, useEffect } from "react"

const categories = [
   { name: "Mercado", icon: "bi-basket2" },
   { name: "Saúde", icon: "bi-heart-pulse" },
   { name: "Casa", icon: "bi-house" },
   { name: "Eventos", icon: "bi-calendar-event" },
   { name: "Outros", icon: "bi-bag" }
]

function ListModal({
   isOpen,
   onClose,
   onSave,
   editingList
}) {

   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [category, setCategory] = useState("Mercado");

   useEffect(() => {
      if(editingList) {
         setName(editingList.name);
         setDescription(editingList.description);
         setCategory(editingList.category);
      } else {
         setName("");
         setDescription("");
         setCategory("Mercado")
      }
   },[editingList, isOpen]);

   if(!isOpen)
      return null;

   function handleSubmit(event) {
      event.preventDefault();

      if(!name.trim()) {
         alert("Informe o nome da lista.");
         return
      }

      const selectedCategory = categories.find(
         (item) => item.name === category
      );

      const listData = {
         name: name.trim(),
         description: description.trim(),
         category,
         icon: selectedCategory.icon
      };

      onSave(listData)
   }

   return (
      <div className="modal-overlay">

         <div className="custom-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="list-modal-title"
         >

            <div className="modal-top">
               <h4 id="list-modal-title">
                  {editingList ? "Editar Lista" : "Nova Lista"}
               </h4>

               <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar"
               >
                  <i className="bi bi-x-lg"></i>
               </button>
            </div>

            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                  <label 
                     htmlFor="list-name"
                     className="form-label"
                  >
                     Nome da lista
                  </label>

                  <input
                     id="list-name"
                     type="text"
                     className="form-control"
                     placeholder="Ex: Compras do mês"
                     value={name}
                     maxLength={60}
                     onChange={(e) => setName(e.target.value)}
                     required
                  />
               </div>

               <div className="mb-3">
                  <label
                      htmlFor="list-description"
                      className="form-label"
                     >
                        Descrição
                     </label>

                     <textarea
                        id="list-description"
                        className="form-control"
                        placeholder="Descreva sua lista..."
                        rows="3"
                        maxLength={200}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                     />
               </div>

               <div className="mb-4">
                  <label   htmlFor="list-category"
                     className="form-label"
                  >Categoria</label>

                  <select
                     id="list-category"
                     className="form-select"
                     value={category}
                     onChange={(e) => setCategory(e.target.value)}
                  >
                     {categories.map((item) => (
                        <option 
                           key={item.name}
                           value={item.name}>
                              {item.name}
                           </option>
                     ))}
                  </select>
               </div>

               <div className="d-flex gap-2">
                  <button
                     type="button"
                     className="btn btn-light flex-fill"
                     onClick={onClose}
                  >
                     Cancelar
                  </button>

                  <button
                     type="submit"
                     className="btn-new-list flex-fill"
                  >
                     <i className="bi bi-check-lg"></i>
                     {editingList ? "Salvar" : "Criar lista"}
                  </button>
               </div>
            </form>

         </div>
      </div>
   )
}

export default ListModal